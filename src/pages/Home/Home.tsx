/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {connect} from 'react-redux';
import Header from '../../components/Header';
import HeroCard from '../../components/HeroCard';
import PropTypes from 'prop-types';
import * as styles from './Home.styles';
//import { HomeWrapper } from './Home.styles';
import {Container, Content, Spinner} from 'native-base';
import {FlatList} from 'react-native';

const Home = (props: any) => {
  let {data} = props;

  if (data.length === 0) {
    return (
      <Container>
        <Header />
        <Content>
          <Spinner color="red" />
          <Spinner color="green" />
          <Spinner color="blue" />
        </Content>
      </Container>
    );
  }

  console.log('array', data[0].results);
  return (
    <>
      <Header />
      <Container>
        <FlatList
          data={data[0].results}
          renderItem={(hero: any) => <HeroCard hero={hero} />}
          keyExtractor={(hero) => hero.id.toString()}
        />
      </Container>
    </>
  );
};

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    data: state.NasaDataReducer,
  };
};

export default connect(mapStateToProps)(Home);
