import styled, {keyframes} from 'styled-components';

interface Props {
  isVisible: boolean;
}

const sizeAnim = keyframes`
from{
    height: 0px;
    width: 0px;
}
to{
    height: 100px;
    width: 200px;
}
`;

const Container = styled.div<Props>`
  position: absolute;
  height: 100px;
  width: 200px;
  background-color: red;
  border-radius: 10px;
  left: 50%;
  top: 50%;
  z-index: 200;
  cursor: pointer;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  animation: ${sizeAnim} 0.3s;
`;

export default Container;
