import logo from './logo.svg';
import Planets from "./components/planets";
import People from "./components/people";
import styled from "styled-components";

const Wrapper = styled.div`
  background: darkgreen;
  background: linear-gradient(darkgreen,darkred);
  width: 100vw;
  height: 100vh;
`;
const SecondWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0 ,0.75);
  background: linear-gradient(to right top, rgba(0,0,0,0.75), rgba(red));
  backdrop-filter: blur(12px);
`
function App() {
  return (
  <Wrapper>

      <SecondWrapper>
      </SecondWrapper>
  </Wrapper>
  );
}

export default App;
