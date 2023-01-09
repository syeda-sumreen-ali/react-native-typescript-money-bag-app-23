import React , {FunctionComponent} from 'react'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'


import { View, Text } from 'react-native'
import { colors } from '../components/color'
import { Container } from '../components/shared'

import BigText from "../components/Texts/BigText"
import SmallText from '../components/Texts/SmallText'
import RegularText from '../components/Texts/RegularText'

import background from "../assets/bgs/background_v1.png";


const WelcomeContainer = styled(Container)`
    background-color: ${colors.secondary};
    justify-content: space-between;
    width: 100%;
    height: 100%
`;

const TopSection = styled.View`
    width: 100%;
    flex:1;
    max-height: 55%;
`;

const TopImage = styled.Image`
    width: 100%;
    height: 100%
    resize-mode: stretch;
`;

const BottomSection = styled.View`
    width: 100%;
    padding: 25px;
    flex:1;
`;

const Welcome:FunctionComponent = () => {
  return (
    <>
        <StatusBar style='light'/>
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={background}/>
                </TopSection>
                <BottomSection>
                    <BigText textStyles={{ width:"70%", marginTop:25}}>
                        Best way to track your money
                    </BigText>
                    <SmallText textStyles={{width:"70%", marginBottom:25}}>
                        Best payment method, connect your money to your friends
                    </SmallText>
                </BottomSection>
            </WelcomeContainer>
    </>
  )
}

export default Welcome 