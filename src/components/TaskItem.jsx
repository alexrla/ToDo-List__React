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

        border: 2px solid #4f9c5a;

        border-radius: 5px;

        color: #4f9c5a;

        padding: 5px;
    }

    .edit:hover {
        background-color: #4f9c5a;

        color: #FFFFFF;
    }

    .delete {
        background-color: #FFFFFF;

        border: 2px solid #d24b4b;

        border-radius: 5px;
        
        color: #d24b4b;

        padding: 5px;
    }

    .delete:hover {
        background-color: #d24b4b;

        color: #FFFFFF;
    }

    .save   {
        background-color: #FFFFFF;
        
        border: 2px solid #5068be;

        border-radius: 5px;

        color: #5068be;

        padding: 5px;
    }

    .save:hover   {
        background-color: #5068be;

        color: #FFFFFF;
    }

    .back   {
        background-color: #FFFFFF;

        
        border: 2px solid #ddb95c;

        border-radius: 5px;
        
        color: #ddb95c;
        
        padding: 5px;
    }

    .back:hover   {
        background-color: #ddb95c;

        color: #FFFFFF;
    }
`;