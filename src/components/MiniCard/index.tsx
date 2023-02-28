import {
    Container,
    RowContainer
} from './styles'


import { CustomText } from '../CustomText'
import { IconWeather } from '../IconWeather'


import theme from '../../theme/theme'

interface MiniCardProps  {
    temperature: number
    hour: string
    icon: string
}

export function MiniCard({
    temperature,
    hour,
    icon
}): MiniCardProps {
    return (
        <Container>
            <RowContainer>
                <CustomText
                    label={temperature}
                    fontSize={18}
                    fontWeight='700'
                />
                <CustomText
                    label='º'
                    fontSize={12}
                    fontWeight='400'
                />
            </RowContainer>
            <IconWeather
                width={30}
                height={31}
                source={icon}
            />
            <CustomText
                label={hour}
                fontSize={12}
                fontWeight='700'
                color={theme.colors.gray100}
            />
        </Container>
    )
}