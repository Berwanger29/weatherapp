import React from "react";
import { CustomButton, IButton } from "./styles";


const Button = ({
    backgroundColor = "transparent",
    borderColor = "transparent",
    children,
    borderRadius = 0,
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