import React, { useState } from "react";
import { Alert, View } from "react-native";
import { Button, Header } from "react-native-elements";
import { Heading, Page } from "../Components";
import * as Notifications from 'expo-notifications';
import { submitToken, Token } from "../Services/api";

async function getNotificationToken() {
    const { status } = await Notifications.getPermissionsAsync()
    if (status !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync()
        if (status !== 'granted') {
            Alert.alert('Not permission')
            return;
        }
    }
    const tokenData = await Notifications.getExpoPushTokenAsync()
    const token = tokenData.data;
    return token;
}

function BoyScreen(): JSX.Element {
    const [token, setToken] = useState<Token | undefined>()
    const handleGetNotification = async () => {
        const token = await getNotificationToken()
        if (token) {
            const storeToken = await submitToken(token)
            setToken(storeToken)
            Alert.alert('Lấy token thành công', `Token đây gửi cho gấu đi :> ${storeToken.id}`)
        }
    }

    return (
        <View>
            <Header
                centerComponent={{
                    text: 'Trang Gấu Nam 👦',
                    style: { color: '#fff', fontSize: 24, fontWeight: '700', lineHeight: 24, paddingBottom: 16 }
                }}
            />
            <Page>
                <Heading>
                    {token ? `Bạn đã có token! <${token.id}>` : 'Bấm vào đây để lấy mã số'}
                </Heading>
                {token ? <></> : (
                    <Button title={'Lấy mã số'} onPress={handleGetNotification} />
                )}
            </Page>
        </View>
    )
}

export default BoyScreen;