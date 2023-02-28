import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 16px;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.colors.dark};
`
export const TitleContainer = styled.View`
    flex-direction: row;
`

export const PlaceContainer = styled.View`
    flex-direction: row;
`

export const PlaceSubColumn = styled.View`
    
`

export const TempearatureContainer = styled.View`
    align-items: center;
`
export const TemperatureCelcius = styled.Text`
    font-size: 76px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.bold};
`

export const MoreInfoContainer = styled.View`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.gray600};
    border-radius: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px 5px;
`

export const SubInfoContainer = styled.View`
    align-items: center;
`

export const Line = styled.View`
    background-color: ${({ theme }) => theme.colors.gray600};
    height: 36px;
    width: 1px;
`

export const GropHours = styled.View`
    width: 100%;
`

export const GroupHoursHeader = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const MiniCardGroup = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 20px;
`