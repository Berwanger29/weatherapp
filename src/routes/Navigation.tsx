import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './Stack';
import { TabBottom } from './TabBottom';

export function Navigation() {
    return (
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    )
}