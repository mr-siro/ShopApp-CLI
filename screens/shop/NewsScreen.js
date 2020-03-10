import React from 'react'
import { Image, View, Text, ScrollView, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
const NewsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>News</Text>
        </View>
    );
};
NewsScreen.navigationOptions = {
    headerTitle: 'News'
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default NewsScreen;