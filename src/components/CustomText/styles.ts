import styled from "styled-components/native";
import { Text, TextProps } from "react-native";

export interface CustomTextProps extends TextProps {
    label?: string
    color?: string
    fontWeight?: '300' | '400' | '600' | '700'
    fontSize?: number
    textAlign?: 'justify' | 'center'
}

export const Label = styled(Text) <CustomTextProps>`
    color: ${({ color }) => color};
    font-weight: ${({ fontWeight }) => fontWeight};
    font-size: ${({ fontSize }) => fontSize}px;
    text-align: ${({ textAlign }) => textAlign};
`
