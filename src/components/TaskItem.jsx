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
        <Tr>
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
                                        className="input"
                                />
                            </form>
                        </td>

                        <td>
                            <button type="submit" className="save" onClick={renameTask}>Salvar</button>
                            <div className="spacing"></div>
                            <button type="button" className="back" onClick={() => setToEdit(false)}>Voltar</button>
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
                            <button  className="edit" onClick={() => setToEdit(true)}>Editar</button>
                            <div className="spacing"></div>
                            <button className="delete" onClick={deleteTask}>Apagar</button>
                        </td>
                    </>
            }
            
        </Tr>
    );
}

const Tr = styled.tr`
    margin-bottom: 15px;

    .spacing    {
        width: 10px;
    }

    td  {
        display: flex;

        font-size: 22px;

        justify-content: center;

        padding-top: 10px;

        text-align: center;

        width: 250px;
    }

    .input  {
        background-color: #FAFAFA;

        border: 2px solid #FAFAFA;

        border-radius: 5px;

        color: #B3AEAE;

        padding: 5px;
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

    .edit {
        background-color: #FFFFFF;

        border: 2px solid #4F9C5A;

        border-radius: 5px;

        color: #4f9C5A;

        padding: 5px;
    }

    .edit:hover {
        background-color: #4f9C5A;

        color: #FFFFFF;
    }

    .delete {
        background-color: #FFFFFF;

        border: 2px solid #D24B4B;

        border-radius: 5px;
        
        color: #D24B4B;

        padding: 5px;
    }

    .delete:hover {
        background-color: #D24B4B;

        color: #FFFFFF;
    }

    .save   {
        background-color: #FFFFFF;
        
        border: 2px solid #5068BE;

        border-radius: 5px;

        color: #5068BE;

        padding: 5px;
    }

    .save:hover   {
        background-color: #5068BE;

        color: #FFFFFF;
    }

    .back   {
        background-color: #FFFFFF;

        
        border: 2px solid #DDB95C;

        border-radius: 5px;
        
        color: #DDB95C;
        
        padding: 5px;
    }

    .back:hover   {
        background-color: #DDB95C;

        color: #FFFFFF;
    }

    @media (max-width: 500px)   {
        .input {
           margin-left: 80px;
        }
    }
`;