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

    var width = window.innerWidth;
    let messageButton = "";

    width <= 500 ?  messageButton = "Adicionar" : messageButton = "Adicionar Tarefa";

    return (
        <Form onSubmit={addTask}>
            <input type="text" 
                   placeholder="Criar tarefa" 
                   value={task}
                   onChange = {(event) => setTask(event.target.value)}
                   autoFocus
            />

            <button type="submit">{messageButton}</button>
        </Form>
    );
}

const Form = styled.form`
    align-items: center;

    display: flex;

    margin-bottom: 20px;

    max-width: 95%;

    input {
        background-color: #FAFAFA;

        border: 2px solid #FAFAFA;

        color: #B3AEAE;

        padding: 5px;
    }

    button {
        background-color: #376CD7;

        border: 2px solid #376CD7;

        color: #FFFFFF;

        padding: 5px;
    }

    button:hover {
        background-color: #1a59d6;

        border: 2px solid #1A59D6;

        cursor: pointer;
    }
`;