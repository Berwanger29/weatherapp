import { useEffect } from "react";
import {
    Icon
} from "./styles";
import { ImageProps } from "react-native";

interface IconWeatherProps extends ImageProps {
    width: number
    height: number
}


export function IconWeather({
    width,
    height,
    ...rest
}: IconWeatherProps) {
    return (
            <Icon
                width={width}
                height={height}
                {...rest}
            />
    )
}