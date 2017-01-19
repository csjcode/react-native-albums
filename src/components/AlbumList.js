import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Create a component

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    // ASYNC HTTP Request to get albums from the API.
    // eslint-disable-next-line
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseData) => this.setState({ albums: responseData }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <Text>{album.title}</Text>
    );
  }

  render() {
    console.log(this.state); // to check to make sure the state is working correctly
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
