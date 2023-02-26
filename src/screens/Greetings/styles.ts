import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.dark};

    justify-content: space-around;
`