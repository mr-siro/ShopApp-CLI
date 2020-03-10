import React from 'react';
import { useDispatch } from 'react-redux';
import { Platform, SafeAreaView, Button, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import Icon from 'react-native-ionicons';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import AuthScreen from '../screens/user/AuthScreen';
import StartupScreen from '../screens/StartupScreen';
import ProfileScreen from '../screens/user/ProfileScreen';
import NewsScreen from '../screens/shop/NewsScreen';
import * as authActions from '../store/actions/auth';
const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTitleStyle: {
        fontFamily: 'Arial-BoldMT'
    },
    headerBackTitleStyle: {
        fontFamily: 'ArialMT'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary

};
const ProductsNavigator = createStackNavigator(
    {
        ProductsOverview: ProductsOverviewScreen,
        ProductDetail: ProductDetailScreen,
        Cart: CartScreen
    },
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (<Icon name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                size={23}
                color={drawerConfig.tintColor}
            />)
        },
        defaultNavigationOptions: defaultNavOptions
    }
);
const OrdersNavigator = createStackNavigator({
    Orders: OrdersScreen
},
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (<Icon name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                size={23}
                color={drawerConfig.tintColor}
            />)
        },
        defaultNavigationOptions: defaultNavOptions
    }
);
const AdminNavigator = createStackNavigator({
    UserProducts: UserProductsScreen,
    EditProduct: EditProductScreen
},
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (<Icon name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                size={23}
                color={drawerConfig.tintColor}
            />)
        },
        defaultNavigationOptions: defaultNavOptions
    }
);
const ShopNavigator = createDrawerNavigator({
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator
},
    {
        contentOptions: {
            activeTintColor: Colors.primary
        },
        contentComponent: props => {
            const dispatch = useDispatch();
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                        <DrawerItems {...props} />
                        <Button
                            title="Logout"
                            color={Colors.primary}
                            onPress={() => {
                                dispatch(authActions.logout());
                                // props.navigation.navigate('Auth');
                            }}
                        />
                    </SafeAreaView>
                </View>
            );
        }
    });
const ProfileNavigator = createStackNavigator({
    Prof: ProfileScreen
},
    {

        defaultNavigationOptions: defaultNavOptions
    });
const NewsNavigator = createStackNavigator({
    New: NewsScreen
},
    {

        defaultNavigationOptions: defaultNavOptions
    });
const bottomApp = createBottomTabNavigator({
    Home: {
        screen: ShopNavigator,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) =>
                <Icon
                    name={Platform.OS === 'android' ? "md-home" : "ios-home"}
                    size={24}
                    color={tintColor}
                />
        }
    },
    News: {
        screen: NewsNavigator,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) =>
                <Icon name={Platform.OS === 'android' ? "md-paper" : "ios-paper"}
                    size={24}
                    color={tintColor}
                />
        }
    },
    Profile: {
        screen: ProfileNavigator,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) =>
                <Icon name={Platform.OS === 'android' ? "md-person" : "ios-person"}
                    size={24}
                    color={tintColor}
                />
        }
    }

},
    {
        tabBarOptions: {
            activeTintColor: "#161F3D",
            inactiveTintColor: "#B8BBC4",
            showLabel: false
        }
    });
const AuthNavigator = createStackNavigator(
    {
        Auth: AuthScreen
    },
    {
        defaultNavigationOptions: defaultNavOptions
    }
);
const MainNavigator = createSwitchNavigator({
    Startup: StartupScreen,
    Auth: AuthNavigator,
    Shop: bottomApp
});
export default createAppContainer(MainNavigator);