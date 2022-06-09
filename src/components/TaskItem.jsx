import { useState } from 'react';

import styled from 'styled-components';

export default function TaskItem(props) {
    const [ task, setTask ] = useState(props.task);
    const [ toEdit, setToEdit ] = useState(false);


    function deleteTask()   {
        props.deleteTask(props.id);
    }

    function renameTask() {
        console.log(props.id);

        props.editTask(props.id, task);

        setToEdit(false);
    }

    return (
        <TR>
            {
                toEdit
                    ?
                    <>
                        <td>
                            <input  type="text" 
                                    value={task}
                                    onChange = {(event) => setTask(event.target.value)}
                                    autoFocus 
                            />
                        </td>

                        <td>
                            <button type="button" onClick={renameTask}>Salvar</button>
                            <div className="spacing"></div>
                            <button type="button" onClick={() => setToEdit(false)}>Voltar</button>
                        </td>
                    </>
                    :
                    <>
                        <td>
                            {props.task}
                        </td>

                        <td>
                            <button onClick={() => setToEdit(true)}>Editar</button>
                            <div className="spacing"></div>
                            <button onClick={deleteTask}>Deletar</button>
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
`;