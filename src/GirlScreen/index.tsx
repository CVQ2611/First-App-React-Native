import * as React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { Button, Header, Input } from 'react-native-elements';
import { Heading, Page } from '../Components';
import styled from 'styled-components';
import { getToken, sendPushNotification, Token } from '../Services/api';


const SubButton = styled(TouchableOpacity) < { color?: string } > `
    background-color: ${p => p.color || 'red'};
    display: flex;
    flex: 48% 0 0;
    border-radius: 4px;
    text-align: center;
    margin-bottom: 10px;
    height: 150px;
    align-items: center;
    justify-content: center;
    color: white;
`

const ContainerBar = styled(View)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`

const FullView = styled(View)`
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
`


const token = 'ExponentPushToken[asVznpHp0QNgr50_8dk0gK]'

function GirlScreen(): JSX.Element {
    const [tokenInput, setTokenInput] = React.useState('')
    const [token, setToken] = React.useState<Token | undefined>()
    const handleSubmitToken = async () => {
        const res = await getToken(tokenInput)
        setToken(res)
    }

    const handleChooseOptions = async (title: string, body: string) => {
        if (token) {
            const tokenSend = token?.token
            const res = await sendPushNotification(tokenSend, title, body)
        } else {
            Alert.alert('Bạn chưa có token của gấu Họăc bạn >CHƯA CÓ GẤU< hihi:))')
        }
    }
    return (
        <FullView>
            <Header
                centerComponent={{
                    text: 'Trang Gấu Nữ 👧',
                    style: { color: '#fff', fontSize: 24, fontWeight: '700', lineHeight: 24, paddingBottom: 16 }
                }} />
            <Page>
                <View>
                    {token && <Heading>Bắt đầu triệu hồi</Heading>}
                    {!token && (
                        <>
                            <Input
                                value={tokenInput}
                                label='Mã số gấu'
                                placeholder='Nhập mã số của bạn nam vào đây!'
                                onChangeText={setTokenInput}
                            />
                            <Button title={'Xác nhận mã số'} onPress={() => handleSubmitToken()} />
                        </>
                    )}
                </View>

                {token && (
                    <View>
                        <Heading>
                            Triệu hồi gấu
                        </Heading>
                        <ContainerBar>
                            <SubButton color={'#e74c3c'} onPress={() => handleChooseOptions('Triệu hồi gấu', 'Em muốn tà tưa 🍵')}>
                                <Text>Em muốn tà tưa 🍵</Text>
                            </SubButton>
                            <SubButton color={'#2980b9'} onPress={() => handleChooseOptions('Triệu hồi gấu', 'Anh ơi em đói! 🥪')}>
                                <Text>Anh ơi em đói! 🥪</Text>
                            </SubButton>
                            <SubButton color={'#2ecc71'} onPress={() => handleChooseOptions('Triệu hồi gấu', 'Nhớ anh quá ❤️')}>
                                <Text>Nhớ anh quá ❤️</Text>
                            </SubButton>
                            <SubButton color={'#f1c40f'} onPress={() => handleChooseOptions('Triệu hồi gấu', 'Gọi cho em 📱')}>
                                <Text>Gọi cho em 📱</Text>
                            </SubButton>
                        </ContainerBar>
                    </View>
                )}
            </Page>
        </FullView>
    )
}

export default GirlScreen;