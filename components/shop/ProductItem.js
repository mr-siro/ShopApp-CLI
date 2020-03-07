import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native';

import Card from '../UI/Card';

const ProductItem = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <Card style={styles.product}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={props.onSelect} useForeground>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: props.image }} />
                        </View>
                        <View style={styles.details}>
                            <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                            <Text style={styles.price}>{props.price.toFixed(3)}đ</Text>
                        </View>
                        <View style={styles.actions}>
                            {props.children}
                        </View>
                    </View>
                </TouchableCmp>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    product: {
        height: 250,
        margin: 15,
        flex: 1,
        borderRadius: 10,
        elevation: 5,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible'
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    details: {
        alignItems: 'center',
        height: '17%',
        padding: 10
    },
    title: {
        fontFamily: 'Arial-BoldMT',
        fontSize: 18,
        marginVertical: 2
    },
    price: {
        fontFamily: 'ArialMT',
        fontSize: 14,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '23%',
        paddingHorizontal: 20
    }
});

export default ProductItem;
