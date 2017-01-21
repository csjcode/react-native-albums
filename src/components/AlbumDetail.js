import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
// Create a component

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  const {
    headerContentStyle,
    imageStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{ uri: image }} style={imageStyle} />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    width: null,
    flex: 1
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
    thumbnailContainerStyle: {
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }

};

export default AlbumDetail;
