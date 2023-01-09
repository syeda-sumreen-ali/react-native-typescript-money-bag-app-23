import React , {FunctionComponent} from 'react'
import { GestureResponderEvent, TextStyle,  StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native'

import {colors} from '../color'
import RegularText from '../Texts/RegularText'


const ButtonView = styled.TouchableOpacity`
    align-items:center;
    background-color: ${colors.primary};
    width: 100%;
    padding:20px;
    border-radius:20px;
`;

//types
interface ButtonProps {
    btnStyles ?: StyleProp <ViewStyle>;
    onPress : ((event: GestureResponderEvent) => void) | undefined;
    textStyles ?: StyleProp <TextStyle>;
    children : React.ReactNode;
}
const RegularButton: FunctionComponent<ButtonProps>  = (props) => {
    return <ButtonView  style={props.btnStyles} onPress={props.onPress}>
        <RegularText  textStyles ={props.textStyles}>{props.children}</RegularText>
    </ButtonView>;
}

export default RegularButton;