import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons } from '@expo/vector-icons'; 

//screens
import HomeScreen from './index'; 
import ProfileScreen from './profile'; 

import colors from '@/src/styles/colors';
import styles from '@/src/styles/styles';

const Tab = createBottomTabNavigator();

export default function RootLayout() {
    return <RootLayoutNav />;
}

type OcticonsIconName = React.ComponentProps<typeof Octicons>['name'];

function RootLayoutNav() {
    return (
            <Tab.Navigator
                
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        
                        let iconName: OcticonsIconName
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home';
                        } else if (route.name === 'Perfil') {
                            iconName = focused ? 'person' : 'person';
                        }

                        return <Octicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: colors.purple,
                    tabBarInactiveTintColor: colors.gray, 
                    headerShown: false,
                    tabBarStyle: {
                      backgroundColor: colors.fullBlack,
                      paddingTop: 10,
                      height: 65, 
                      borderTopWidth: 0, 
                    },
                    tabBarLabelStyle: {
                      fontSize: 13,
                      fontFamily: 'Montserrat_500Medium',
                  }
                })
                
              }
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Perfil" component={ProfileScreen} />
            </Tab.Navigator>

    );
}