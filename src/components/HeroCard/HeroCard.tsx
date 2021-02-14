/* eslint-disable react-native/no-inline-styles */
import React from 'react';
/* import * as styles from './HeroCard.styles'; */
//import { HeroCardWrapper } from './HeroCard.styles';
import {Image} from 'react-native';
import {
  Content,
  Card,
  CardItem,
  /* Thumbnail, */
  Text,
  Button,
  Icon,
  Left,
  Body,
  H3,
  View,
} from 'native-base';

const HeroCard = (props: any) => {
  const {
    gender,
    image,
    location,
    name,
    origin,
    species,
    status,
  } = props.hero.item;
  return (
    <Content>
      <Card style={{flex: 0}}>
        <CardItem>
          <Left>
            <Body>
              <Text>NativeBase</Text>
              <Text note>April 15, 2016</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            {
              <Image
                source={{uri: image}}
                style={{height: 200, width: 200, flex: 1}}
              />
            }
            <View>
              <H3>Name: {name}</H3>
            </View>
            <View>
              <H3>Status: {status}</H3>
            </View>
            <View>
              <H3>Location: {location.name}</H3>
            </View>
            <View>
              <H3>Place of birth: {origin.name}</H3>
            </View>
            <View>
              <H3>gender: {gender}</H3>
            </View>
            <View>
              <H3>species: {species}</H3>
            </View>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent textStyle={{color: '#87838B'}}>
              <Icon name="logo-github" />
              <Text>1,926 stars</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    </Content>
  );
};

export default HeroCard;
