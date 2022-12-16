import styled from 'styled-components';
import Todos from './Components/Todos';

const StyledH2 = styled.h2`
  text-align: center;
`;

function App() {
  return (
    <div>
      <StyledH2>Todo</StyledH2>
      <Todos />
    </div>
  );
}

export default App;
