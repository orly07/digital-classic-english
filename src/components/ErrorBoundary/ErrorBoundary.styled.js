import styled from "styled-components";
import { color, shadow, typography } from "../../styles/theme"

export const ErrorWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;

    h2 {
        color: ${color.danger};
        font-size: ${typography.fontSize["4xl"]};
        font-family: ${typography.fontFamily};
    }

    button {
        border: none;
        padding: 10px 20px;
        border-radius: 10px;
        color: ${color.white};
        background-color: ${color.primary};
        font-size: ${typography.fontSize.lg};
        transition: all 0.2s ease;

        &:hover {
            background-color: ${color.primaryDark};
            transform: translateY(-2px);
            box-shadow: ${shadow.sm};
        }
    }
`