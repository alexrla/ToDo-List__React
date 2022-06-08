import styled from 'styled-components';

export default function TaskItem(props) {
    return (
        <TR>
            <td>
                {props.task}
            </td>

            <td>
                <button>Editar</button>
                <div className="spacing"></div>
                <button>Deletar</button>
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