import React, { memo } from "react";
import { ButtonContainer } from "./Button.styled";

const Button = memo(
  ({
    children,
    variant = "primary",
    size = "medium",
    as: Component = "button",
    ...props
  }) => {
    return (
      <ButtonContainer
        as={Component}
        $variant={variant}
        $size={size}
        {...props}
      >
        {children}
      </ButtonContainer>
    );
  }
);

Button.displayName = "Button";
export default Button;
