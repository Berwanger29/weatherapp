import styled from "styled-components/native";


export interface IconProps {
    width: number
    height?: number
}

export const Icon = styled.Image<IconProps>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
`