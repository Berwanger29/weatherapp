import { Container, TitleContainer } from "./styles";

import { CustomText } from "../../components/CustomText";

import theme from "../../theme/theme";

export function Home() {

    return (
        <Container>
            <TitleContainer>
                <CustomText
                    label="Find"
                    fontWeight="400"
                    fontSize={33}
                    color={theme.colors.white}
                />
                <CustomText
                    label="Weather"
                    fontWeight="700"
                    fontSize={33}
                    color={theme.colors.white}
                />
            </TitleContainer>
            <CustomText
                label="Selecione aqui um local e encontre o clima em tempo real"
                textAlign="center"
                fontWeight="400"
                fontSize={22}
                color={theme.colors.gray200}
                
            />
        </Container>
    )
}