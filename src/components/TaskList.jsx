import React, { useState } from 'react';

export default function TaskList(props) {
    const [ tasks, setTasks ] = useState([]);

    return (
        <div>
            <h1>{props.task}</h1>
        </div>
    );
}