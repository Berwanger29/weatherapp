import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { Home } from '../screens/Home';
import { Search } from '../screens/Search';
import theme from '../theme/theme';

const Tab = createBottomTabNavigator();

export function TabBottom() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarLabelPosition: 'beside-icon',
                tabBarActiveTintColor: theme.colors.white,
                tabBarInactiveTintColor: theme.colors.gray500,
                tabBarStyle: {
                    backgroundColor: theme.colors.dark,
                    borderTopWidth: 0
                },
                tabBarLabelStyle: {
                    fontFamily: theme.fonts.semiBold,
                    fontSize: 16
                }
            }}

        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="home-outline"
                            color={focused ? theme.colors.white : theme.colors.gray500}
                            size={28}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="search"
                            color={focused ? theme.colors.white : theme.colors.gray500}
                            size={28}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}