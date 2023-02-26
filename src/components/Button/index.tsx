import React from "react";
import { CustomButton, IButton } from "./styles";


const Button = ({
    backgroundColor,
    borderColor = "transparent",
    children,
    borderRadius,
    height,
    ...rest
}: IButton): JSX.Element => {
    return (
        <CustomButton
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            borderRadius={borderRadius}
            height={height}
            {...rest}
        >
            {children}
        </CustomButton>
    );
};

export default Button;