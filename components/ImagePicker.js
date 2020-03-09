import React, { Component } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';
export default class ImgPicker extends Component {
  state = {
    avatarSource: null
  }
  selectImage = async () => {
    ImagePicker.showImagePicker({ noData: true, mediaType: 'photo' }, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: response.uri,
        });
      }
    });
  }
  render() {
    return (
      <View>
        {
          this.state.avatarSource && <Image />
        }
        <Button title='select Image' onPress={this.selectImage} />
      </View>
    );
  }
};