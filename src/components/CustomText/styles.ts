import styled from "styled-components/native";
import { Text, TextProps } from "react-native";

export interface LabelProps extends TextProps {
    label: string
    color?: string
    fontWeight?: '300' | '400' | '600' | '700'
    fontSize?: number
    textAlign?: 'justify' | 'center'
    decoration?: string
}

export const Label = styled(Text) <LabelProps>`
    color: ${({ color, theme }) => color ? color : theme.colors.white};
    font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : '400'};
    font-size: ${({ fontSize }) => fontSize ? fontSize : 18}px;
    text-align: ${({ textAlign }) => textAlign ? textAlign : 'left'};
    text-decoration: ${({ decoration }) => decoration ? decoration : 'none'};
    text-decoration-color: ${({ theme }) => theme.colors.white};
`
