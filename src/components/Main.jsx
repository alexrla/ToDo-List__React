import React, { useState } from 'react';

import CreateTask from './CreateTask'; 
import TaskList from './TaskList';

export default function Main(props) {
    const [ tasks, setTasks ] = useState([]);

    function createTask(task)   {
        if(task.trim() === "") {
            alert("O campo para criar tarefa não pode estar vazio.\nPor favor, preencha o campo e tente novamente.");
            return;
        }

        setTasks([...tasks, task]);
    }

    return (
        <div>
            <h1>To Do List</h1>

            <CreateTask createTask={createTask} />
            <TaskList />
        </div>
    );
}