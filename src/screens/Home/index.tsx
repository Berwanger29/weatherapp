import { useState } from "react";
import {
    Container,
    GropHours,
    GroupHoursHeader,
    Line,
    MiniCardGroup,
    MoreInfoContainer,
    PlaceContainer,
    PlaceSubColumn,
    SubInfoContainer,
    TempearatureContainer,
    TemperatureCelcius,
    TitleContainer
} from "./styles";

import Button from "../../components/Button";
import { CustomText } from "../../components/CustomText";
import { IconWeather } from "../../components/IconWeather";
import { Entypo } from '@expo/vector-icons';
import { MiniCard } from "../../components/MiniCard";


import theme from "../../theme/theme";

import icon from '../../../assets/icons/climate-change.png'
import raining from '../../../assets/icons/raining.png'
import humidity from '../../../assets/icons/drop-miniature.png'
import wind from '../../../assets/icons/wind-miniature.png'
import cloud from '../../../assets/icons/raining-cloud-miniature.png'

import miniCloud from '../../../assets/icons/image-1.png'
import miniCloud2 from '../../../assets/icons/image-6.png'
import miniSun from '../../../assets/icons/image-5.png'
import miniSun2 from '../../../assets/icons/image-4.png'







export function Home() {

    const [location, setLocation] = useState('')
    const [hasLocation, setHasLocation] = useState(false)

    return (
        <Container>
            {
                !hasLocation &&
                <>
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
                    <IconWeather
                        width={243}
                        height={256}
                        source={icon}
                    />
                    <Button
                        backgroundColor="transparent"

                        onPress={() => {
                            setHasLocation(!hasLocation)
                        }}
                    >
                        <CustomText
                            label="Selecione aqui um local e encontre o clima em tempo real"
                            textAlign="center"
                            fontWeight="400"
                            fontSize={22}
                            color={theme.colors.gray200}
                            decoration='underline'
                        />
                    </Button>
                </>
            }

            {
                hasLocation &&
                <>
                    <PlaceContainer>
                        <Entypo
                            name="location-pin"
                            size={32}
                            color={theme.colors.white}
                        />
                        <PlaceSubColumn>
                            <CustomText
                                label="A Coruña, Espanha"
                                fontSize={18}
                                color={theme.colors.white}
                            />
                            <CustomText
                                label="Domingo, 01 Jan de 2023"
                                fontSize={16}
                                color={theme.colors.gray100}
                            />
                        </PlaceSubColumn>
                    </PlaceContainer>

                    <TempearatureContainer>
                        <IconWeather
                            height={140}
                            width={172}
                            source={raining}

                        />
                        <TemperatureCelcius>
                            26º
                        </TemperatureCelcius>
                        <CustomText
                            label="Chuva moderada"
                            fontSize={30}
                            fontWeight="400"
                        />
                    </TempearatureContainer>

                    <MoreInfoContainer>
                        <SubInfoContainer>
                            <IconWeather
                                width={16}
                                height={22}
                                source={humidity}
                                style={{
                                    marginBottom: 6
                                }}
                            />
                            <CustomText
                                label="24%"
                                fontWeight="700"
                                fontSize={16}
                            />
                            <CustomText
                                label="Umidade"
                                fontWeight="300"
                                fontSize={14}
                                color={theme.colors.gray400}
                            />
                        </SubInfoContainer>
                        <Line />

                        <SubInfoContainer>
                            <IconWeather
                                width={26}
                                height={20}
                                source={wind}
                                style={{
                                    marginBottom: 6
                                }}
                            />
                            <CustomText
                                label="20km/h"
                                fontWeight="700"
                                fontSize={16}
                            />
                            <CustomText
                                label="Veloc. Vento"
                                fontWeight="300"
                                fontSize={14}
                                color={theme.colors.gray400}
                            />
                        </SubInfoContainer>

                        <Line />
                        <SubInfoContainer>
                            <IconWeather
                                width={24}
                                height={22}
                                source={cloud}
                                style={{
                                    marginBottom: 6
                                }}
                            />
                            <CustomText
                                label="76%"
                                fontWeight="700"
                                fontSize={16}
                            />
                            <CustomText
                                label="Chuva"
                                fontWeight="300"
                                fontSize={14}
                                color={theme.colors.gray400}
                            />
                        </SubInfoContainer>
                    </MoreInfoContainer>

                    <GropHours>
                        <GroupHoursHeader>
                            <CustomText
                                label="Hoje"
                                fontWeight="400"
                                fontSize={20}
                            />

                            <Button
                                onPress={() => setHasLocation(!hasLocation)}
                                borderRadius={0}
                            >
                                <CustomText
                                    label="Próximos 5 dias >"
                                    color={theme.colors.gray100}
                                    fontSize={16}
                                    fontWeight="600"
                                />
                            </Button>
                        </GroupHoursHeader>
                        <MiniCardGroup>
                            <MiniCard
                                temperature={23}
                                icon={miniCloud}
                                hour='09:00'
                            />
                            <MiniCard
                                temperature={18}
                                icon={miniCloud2}
                                hour='13:00'
                            />
                            <MiniCard
                                temperature={8}
                                icon={miniSun}
                                hour='17:00'
                            />
                            <MiniCard
                                temperature={28}
                                icon={miniSun2}
                                hour='23:00'
                            />
                        </MiniCardGroup>
                    </GropHours>
                </>
            }
        </Container>
    )
}