import styled from "styled-components/native";
import { ViewProps, ImageProps } from "react-native";

export interface ViewIconProps extends ViewProps {
    width: number
    height?: number
}

export interface IconProps {
    width: number
    height?: number
}

export const Container = styled.View<ViewIconProps>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
`

export const Icon = styled.Image<IconProps>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
`