import React, {ReactElement} from 'react';
import Container from './Container';
import Arrow from './Arrow';
import Column from '../../common/Column';
import Row from '../../common/Row';

interface Props {
  children?: Array<ReactElement>;
}

const Carousel: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <Container>
      <Column width="100px">
        <Arrow direction="left"></Arrow>
      </Column>
      <Column width="100%">
        <Row justifyContent="center" style={{height: '90%', width: '100%'}}>
          EMINEM
        </Row>
        <Row
          justifyContent="center"
          style={{height: '10%', width: '100%'}}
        ></Row>
      </Column>
      <Column width="100px">
        <Arrow direction="right"></Arrow>
      </Column>
    </Container>
  );
};

export default Carousel;
