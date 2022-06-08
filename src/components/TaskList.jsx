import React, { useState } from 'react';
import styled from 'styled-components';

import TaskItem from './TaskItem';

export default function TaskList(props) {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Tarefas</th>
                    <th>Ações</th>
                </tr>
            </thead>

            <tbody>
                {props.tasks.map((task, index) => (
                    <TaskItem key={index} task={task} id={index} deleteTask={props.deleteTask} />
                ))}
            </tbody>
        </Table>
    );
}

const Table = styled.table`
    width: 600px;

    tr      {
        display: flex;
        justify-content: space-between;
    }

    th  {
        font-size: 26px;
        width: 250px;
        text-align: center;

        padding: 10px;

        color: #FFFFFF;

        font-weight: bold;
    }
`;

