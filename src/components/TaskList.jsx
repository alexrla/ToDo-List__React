import React from 'react';
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
                    <TaskItem   key={index} 
                                task={task} 
                                id={index} 
                                deleteTask={props.deleteTask} 
                                editTask ={props.editTask}
                                complete={props.complete} 
                />
                ))}
            </tbody>
        </Table>
    );
}

const Table = styled.table`
    color: #FFFFFF;

    max-width: 95%;

    width: 600px;

    tr      {
        display: flex;

        justify-content: space-between;
    }

    th  {
        font-size: 26px;

        font-weight: bold;

        padding: 10px;

        text-align: center;

        width: 250px;
    }

    @media (max-width: 500px)   {
        th, td {
            width: 100px;
        }
    }
`;

