import Main from './components/Main';
import styled from 'styled-components';

export default function App(props) {
  return (
    <DivAPP>
      <Overlay>
        <Main />
      </Overlay>
    </DivAPP>
  );
}

const DivAPP = styled.div`
  background-image: url("https://files.passeidireto.com/a5662d82-24ae-46b3-9fe2-7012859f4101/bg1.png");

  background-repeat: no-repeat;

  background-size: cover;

  background-position: center;

  width: 100%;

  min-height: 100vh;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);

  width: 100%;

  min-height: 100vh;

  display: flex;

  justify-content: center;
`;
