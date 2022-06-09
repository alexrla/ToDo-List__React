import Main from './components/Main';
import styled from 'styled-components';

export default function App(props) {
  return (
    <Container className="container">
      <Overlay>
        <Main />
      </Overlay>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;

  width: 100%;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;

  justify-content: center;

  min-height: 100vh;

  width: 100%;
`;
