import { CustomText } from "../../components/CustomText";
import theme from "../../theme/theme";
import { Container } from "./styles";


export function Home() {
    return (
        <Container>
            <CustomText
                label="Home"
                fontWeight="400"
                color={theme.colors.gray200}
            />
        </Container>
    )
}