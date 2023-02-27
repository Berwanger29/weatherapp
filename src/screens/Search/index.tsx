import { CustomText } from "../../components/CustomText";
import theme from "../../theme/theme";
import { Container } from "./styles";


export function Search() {
    return (
        <Container>
            <CustomText
                label="Buscar"
                fontWeight="400"
                color={theme.colors.gray200}
            />
        </Container>
    )
}