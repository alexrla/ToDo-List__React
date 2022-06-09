import { useState } from 'react';

import styled from 'styled-components';

export default function TaskItem(props) {
    const [ task, setTask ] = useState(props.task);
    const [ toEdit, setToEdit ] = useState(false);
    const [ complete, setComplete ] = useState(false);


    function deleteTask()   {
        props.deleteTask(props.id);
    }

    function renameTask(event) {
        // event.preventDefault();

        props.editTask(props.id, task);

        setToEdit(false);
    }

    function toggleTask()   {
        const toComplete = !complete;

        setComplete(toComplete);
    }

    
    return (
        <TR>
            {
                toEdit
                    ?
                    <>
                        <td>
                            <form /*onSubmit={renameTask}*/ >
                                <input  type="text" 
                                        value={task}
                                        onChange = {(event) => setTask(event.target.value)}
                                        autoFocus
                                />
                            </form>
                        </td>

                        <td>
                            <button type="submit" onClick={renameTask}>Salvar</button>
                            <div className="spacing"></div>
                            <button type="button" onClick={() => setToEdit(false)}>Voltar</button>
                        </td>
                    </>
                    :
                    <>
                        <td onClick={toggleTask} className="checkbox">
                            <input type="checkbox" readOnly checked={complete} />
                            <span className={complete ? "trace" : ""}>
                                {props.task}
                            </span>
                        </td>

                        <td>
                            <button onClick={() => setToEdit(true)}>Editar</button>
                            <div className="spacing"></div>
                            <button onClick={deleteTask}>Apagar</button>
                        </td>
                    </>
            }
            
        </TR>
    );
}

const TR = styled.tr`
    margin-bottom: 15px;

    .spacing    {
        width: 10px;
    }

    td  {
        color: #FFFFFF;

        font-size: 22px;

        width: 250px;

        display: flex;

        justify-content: center;

        text-align: center;

        padding-top: 10px;
    }

    span    {
        cursor: pointer;
    }

    .trace  {
        text-decoration: line-through;

        color: #376CD7;
    }

    .checkbox {
        align-items: center;

        display: flex;
    }

    button  {
        cursor: pointer;
    }
`;