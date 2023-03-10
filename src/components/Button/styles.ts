import { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export interface IButton extends TouchableOpacityProps {
    children: ReactNode;
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: number;
    height?: number | 'auto';
}

export const CustomButton = styled(TouchableOpacity) <IButton>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: ${({ borderRadius }) => borderRadius}px;
    border: 1px solid ${({ borderColor }) => borderColor};
    height: ${({ height }) => height ? height + 'px' : 'auto'};
    align-items: center;
    justify-content: center;
`