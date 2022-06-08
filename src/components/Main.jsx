import React, { useState } from 'react';

import CreateTask from './CreateTask'; 
import TaskList from './TaskList';

export default function Main(props) {
    const [ tasks, setTasks ] = useState([]);

    return (
        <div>
            <h1>To Do List</h1>

            <CreateTask />
            <TaskList />
        </div>
    );
}