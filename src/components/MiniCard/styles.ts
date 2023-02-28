import styled from "styled-components/native";

export const Container = styled.View`
    border: 1px solid ${({ theme }) => theme.colors.dark100};
    background-color: ${({ theme }) => theme.colors.dark300};
    border-radius: 20px;
    padding: 7px 10px;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    width: 68px;
`
export const RowContainer = styled.View`
    flex-direction: row;
`