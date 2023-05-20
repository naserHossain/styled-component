import styled from "styled-components";
import TextInput from "../../ui/inputs/TextInput";
import Label from "../../ui/inputs/Label";

const Container = styled.div`
    width: 100%;
    padding: 1rem;
    border: 2px solid #011f4b;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const ErrorMessage = styled.div`
    font-size: 0.8rem;
    color: red;
`;

const InputGroup = ({
    label,
    name,
    value,
    placeholder,
    error,
    onChange,
    onFocus,
    onBlur,
}) => {
    return (
        <Container>
            <Label htmlFor={name}>{label}</Label>
            <TextInput
                name={name}
                id={name}
                placeholder={placeholder ?? ""}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                error={error}
            />
            {error && <ErrorMessage> {error} </ErrorMessage>}
        </Container>
    );
};

export default InputGroup;
