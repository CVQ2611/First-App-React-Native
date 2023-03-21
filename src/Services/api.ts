import axios from "axios"
import { Alert } from "react-native"

const EXPO_URL_POST = 'https://api.expo.dev/v2/push/send'
const PUSH_TOKEN_SERVER = 'https://gau-server.glitch.me/notifications'

export interface Token {
    id: number,
    token: string,
}

export const submitToken = async (token: string) => {
    const res = await axios.post(PUSH_TOKEN_SERVER, { token })
    const result = res.data as Token
    return result
}

export const getToken = async (id: number | string) => {
    const res = await axios.get(`${PUSH_TOKEN_SERVER}/${id}`)
    const result = res.data as Token
    return result
}

export const sendPushNotification = async (token: string, title: string, body: string) => {
    const message = {
        to: token,
        sound: 'default',
        title: title,
        body: body,
    }
    await axios.post(EXPO_URL_POST, message)
    Alert.alert('Triệu hồi gấu thành công <3')
}