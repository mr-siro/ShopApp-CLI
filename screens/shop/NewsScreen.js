import React from 'react'
import { Image, View, Text, ScrollView, StyleSheet } from 'react-native';
const NewsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>News</Text>
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
export default NewsScreen;