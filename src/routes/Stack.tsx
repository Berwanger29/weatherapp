import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Greetings } from '../screens/Greetings';
import { Home } from '../screens/Home';
import { TabBottom } from './TabBottom';

const S = createNativeStackNavigator()

export function Stack() {
    return (
        <S.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <S.Screen
                name='Greetings'
                component={Greetings}
            />
            <S.Screen
                name='Tab'
                component={TabBottom}
            />
        </S.Navigator>
    )
}