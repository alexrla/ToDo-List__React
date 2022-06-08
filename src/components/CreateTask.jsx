import React, { useState } from 'react';

export default function CreateTask(props) {
    const createTask = props.createTask;
    const [ task, setTask ] = useState("");

    function addTask(event)  {
        event.preventDefault();

        createTask(task);

        setTask("");
    }

    return (
        <form onSubmit={addTask}>
            <input type="text" 
                   placeholder="Criar tarefa" 
                   value={task}
                   onChange = {(event) => setTask(event.target.value)}
                   autoFocus
            />

            <button type="submit">Adicionar tarefa</button>
        </form>
    );
}