import React, { useState } from 'react';

import styled from 'styled-components';

export default function CreateTask(props) {
    const createTask = props.createTask;
    const [ task, setTask ] = useState("");

    function addTask(event)  {
        event.preventDefault();

        createTask(task);

        setTask("");
    }

    return (
        <Form onSubmit={addTask}>
            <input type="text" 
                   placeholder="Criar tarefa" 
                   value={task}
                   onChange = {(event) => setTask(event.target.value)}
                   autoFocus
            />

            <button type="submit">Adicionar tarefa</button>
        </Form>
    );
}

const Form = styled.form`
    display: flex;

    align-items: center;

    margin-bottom: 20px;

    input {
        border: 2px solid #FAFAFA;

        background-color: #FAFAFA;

        padding: 5px;
    }

    button {
        border: 2px solid #376CD7;

        background-color: #376CD7;

        color: #FFFFFF;

        padding: 5px;
    }

    button:hover {
        background-color: #1a59d6;

        border: 2px solid #1A59D6;

        cursor: pointer;
    }
`;