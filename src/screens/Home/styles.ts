import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    padding: 50px 30px;
    background-color: ${({ theme }) => theme.colors.dark};
`
export const TitleContainer = styled.View`
    flex-direction: row;
`