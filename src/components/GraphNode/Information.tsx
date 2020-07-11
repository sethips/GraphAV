import styled from 'styled-components';

interface Props {
  zoomPercentage: number;
}

const Information = styled.div<Props>`
  font-size: ${(props) => `${props.zoomPercentage * 15}px`};
  color: ${(props) => props.theme.sidebar.background};
  position: absolute;
  top: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  pointer-events: none;
  transition: 0.3s color;
`;

export default Information;