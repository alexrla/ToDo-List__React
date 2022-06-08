import React, { useState } from 'react';

import styled from 'styled-components';

import CreateTask from './CreateTask'; 
import TaskList from './TaskList';

export default function Main(props) {
    const [ tasks, setTasks ] = useState([]);

    function createTask(task)   {
        if(task.trim() === "") {
            alert("O campo para criar tarefa não pode estar vazio.\nPor favor, preencha o campo e tente novamente!");
            return;
        }

        setTasks([...tasks, task]);
    }

    return (
        <DivMain>
            <h1>To Do List</h1>

            <CreateTask createTask={createTask} />
            <TaskList tasks={tasks} />
        </DivMain>
    );
}

const DivMain = styled.div`
    align-items: center;

    display: flex;

    flex-direction: column;

    h1  {
    padding-top: 40px;

    padding-bottom: 10px;

    color: #FFFFFF;

    font-size: 36px;

    font-weight: bold;
  }
`;