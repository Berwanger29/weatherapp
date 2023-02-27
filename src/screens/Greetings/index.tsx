import { Container } from "./styles";
import Button from "../../components/Button";
import { CustomText } from "../../components/CustomText";

import { useNavigation } from '@react-navigation/native'
import theme from "../../theme/theme";
import { IconWeather } from "../../components/IconWeather";


export function Greetings() {

    const navigation = useNavigation()

    return (
        <Container>
            <IconWeather
                width={222}
                height={214}
            />

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
                onPress={() => navigation.navigate('Tab')}
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