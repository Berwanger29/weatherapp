import {
    CustomTextProps,
    Label,
} from "./styles";


export function CustomText({
    label,
    color,
    fontWeight,
    fontSize,
    textAlign
}: CustomTextProps) {
    return (
        <Label
            fontWeight={fontWeight}
            fontSize={fontSize}
            color={color}
            textAlign={textAlign}
        >
            {label}
        </Label>
    )
}