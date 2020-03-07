import React from 'react'
import { Image, View, Text, ScrollView, StyleSheet } from 'react-native';
import ImgPicker from '../../components/ImagePicker'
const ProfileScreen = props => {
    return (
        <View style={styles.screen}>
            <ImgPicker />
            <Text>Profile</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default ProfileScreen;