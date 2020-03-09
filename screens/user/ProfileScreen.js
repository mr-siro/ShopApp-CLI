import React, { Component } from 'react';
import { View, Image, Button, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-ionicons';

export default class ProfileScreen extends Component {
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
            <View style={styles.screen}>
                <View style={styles.imageContainer}>
                    {
                        this.state.avatarSource &&
                        <Image
                            source={{ uri: this.state.avatarSource }}
                            style={styles.img}
                        />
                    }
                    <TouchableOpacity
                        title='select Image'
                        onPress={this.selectImage}>
                        <Icon
                            name={Platform.OS === 'android' ? 'md-camera' : 'ios-camera'}
                            size={23}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50
    }
});