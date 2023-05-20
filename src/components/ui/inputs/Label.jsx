import styled from "styled-components";

const fontSizes = {
    sm: "0.8rem",
    md: "1rem",
    lg: "1.2rem",
};
const lineHeights = {
    sm: 1,
    md: 1.2,
    lg: 1.4,
};
const Label = styled.label`
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${(props) => fontSizes[props.size] ?? "1rem"};
    color: #222;
    line-height: ${(props) => lineHeights[props.line] ?? 1};
    user-select: none;
`;
export default Label;
