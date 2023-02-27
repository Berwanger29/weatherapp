import { useEffect } from "react";
import {
    Container,
    Icon
} from "./styles";
import { ViewIconProps } from "./styles";

interface IconWeatherProps extends ViewIconProps {
    src?: string
}


export function IconWeather({
    width,
    height,
    src
}: IconWeatherProps) {

    useEffect(()=>{
        console.log(src)
    },[])
    return (
            <Icon
                source={require('../../../assets/icons/cloud-and-thunder-2.png')}
                width={width}
                height={height}
            />
    )
}