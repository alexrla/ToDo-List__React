import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import CreateTask from './CreateTask'; 
import TaskList from './TaskList';

export default function Main(props) {
    const [ tasks, setTasks ] = useState([]);
    let complete = false;

    useEffect(() => {
        const tasksStorage = localStorage.getItem("tasks");

        if(tasksStorage) {
            setTasks(JSON.parse(tasksStorage));
        }
    }, [setTasks]);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function createTask(task)   {
        if(task.trim() === "") {
            alert("O campo para criar tarefa não pode estar vazio.\nPor favor, preencha o campo e tente novamente!");
            return;
        }

        setTasks([...tasks, task]);
    }

    function deleteTask(taskId)   {
        tasks.splice(taskId, 1);

        setTasks([...tasks]);
    }

    function editTask(taskId, task)   {
        const taskItem = tasks;

        taskItem[taskId] = task;

        setTasks([...taskItem]);
    }


    return (
        <DivMain>
            <h1>To Do List</h1>

            <CreateTask createTask={createTask} />
            <TaskList   tasks={tasks} 
                        deleteTask={deleteTask} 
                        editTask={editTask}
                        complete={complete} 
            />
        </DivMain>
    );
}

const DivMain = styled.div`
    align-items: center;

    display: flex;

    flex-direction: column;

    max-width: 95%;

    width: 100%;

    h1  {
        color: #FFFFFF;

        font-size: 36px;

        font-weight: bold;

        padding: 40px 0 10px;
    }
`;