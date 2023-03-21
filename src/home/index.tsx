import React from 'react';
import BoyScreen from "../BoyScreen";
import GirlScreen from "../GirlScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../StartScreen';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();


function Home(): JSX.Element {
    const navigate = useNavigation()
    return (
        <Stack.Navigator initialRouteName="Trang chủ" screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Trang chủ"
            >
                {(props) => <StartScreen {...props} navigate={navigate} />}
            </Stack.Screen>
            <Stack.Screen
                name="BoyScreen"
                component={BoyScreen}
            />
            <Stack.Screen
                name="GirlScreen"
                component={GirlScreen}
            />
        </Stack.Navigator>
    )
}

export default Home;