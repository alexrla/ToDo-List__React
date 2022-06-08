import styled from 'styled-components';

export default function TaskItem(props) {
    function deleteTask()   {
        props.deleteTask(props.id);
    }

    return (
        <TR>
            <td>
                {props.task}
            </td>

            <td>
                <button>Editar</button>
                <div className="spacing"></div>
                <button onClick={deleteTask}>Deletar</button>
            </td>
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
    }
`;