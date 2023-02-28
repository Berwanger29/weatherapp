import { TextProps } from "react-native";
import {
    LabelProps,
    Label,
} from "./styles";

interface CustomTextprops extends LabelProps {
    rest?: TextProps
}


export function CustomText({
    label,
    color,
    fontWeight,
    fontSize,
    textAlign,
    decoration,
    ...rest
}: CustomTextprops) {
    return (
        <Label
            fontWeight={fontWeight}
            fontSize={fontSize}
            color={color}
            textAlign={textAlign}
            decoration={decoration}
            {...rest}
        >
            {label}
        </Label>
    )
}