import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
// Create a component

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
