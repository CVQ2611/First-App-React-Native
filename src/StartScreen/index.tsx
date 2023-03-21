import styled from 'styled-components';
import { Button } from 'react-native-elements';
import { Heading } from '../Components';
import { Page } from '../Components';
import { View } from 'react-native';

const ContainerChoose = styled(View)`
    display: flex;
    width:100%;
    heigh: 100%;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    margin-top: 50%;
    text-align: center;
`

const SingleButton = styled(View)`
    margin-top: 16px;
    margin-bottom: 8px;
`
function StartScreen({ navigate }: any): JSX.Element {
    return (
        <Page>
            <ContainerChoose>
                <Heading>
                    Chọn giới tính của bạn
                </Heading>
                <SingleButton>
                    <Button title={'Nam'} onPress={() => navigate.navigate('BoyScreen')} />
                </SingleButton>
                <SingleButton>
                    <Button title={'Nữ'} onPress={() => navigate.navigate('GirlScreen')} />
                </SingleButton>
            </ContainerChoose>

        </Page>
    )
}

export default StartScreen;