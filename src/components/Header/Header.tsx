import React from 'react';
import {
  Container,
  Header as HeaderContainer,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
} from 'native-base';
/* import PropTypes from 'prop-types'; */
/* import * as styles from './Header.styles'; */
//import { HeaderWrapper } from './Header.styles';

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </HeaderContainer>
    </Container>
  );
};

/* Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
}; */

export default Header;
