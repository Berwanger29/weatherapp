import { Container } from "./styles";
import Button from "../../components/Button";
import { CustomText } from "../../components/CustomText";
import theme from "../../theme/theme";


export function Greetings() {
    return (
        <Container>

            <CustomText
                label={`Descubra o Clima${'\n'} na sua cidade`}
                fontWeight="700"
                fontSize={33}
                color={theme.colors.white}
                textAlign="center"
            />

            <CustomText
                label='Com o FindWeather nunca ficou tão fácil ter a previsão do tempo na palma da sua mão'
                fontWeight="700"
                fontSize={22}
                color={theme.colors.gray100}
                textAlign="center"
            />
            <Button
                backgroundColor={theme.colors.dark300}
                borderColor={theme.colors.gray300}
                borderRadius={18}
                height={54}

            >
                <CustomText
                    label="Iniciar"
                    fontWeight="600"
                    fontSize={22}
                    color={theme.colors.white}
                />
            </Button>
        </Container>
    )
}