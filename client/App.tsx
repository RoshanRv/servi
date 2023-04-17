import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import Home from "./screens/Home"
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons"
import { COLORS, SIZES } from "./utils/constants"
import Profile from "./screens/Profile"
import { Provider } from "react-native-paper"
import { ThemeProp } from "react-native-paper/lib/typescript/src/types"
import { useFonts } from "expo-font"

const Tab = createMaterialBottomTabNavigator()
const theme: ThemeProp = {
    colors: {
        secondaryContainer: "transparent",
        background: "transparent",
    },
}

export default function App() {
    const [loaded] = useFonts({
        InterBold: require("./assets/fonts/Inter-Bold.ttf"),
        InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
        // InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
        InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
        // InterLight: require("./assets/fonts/Inter-Light.ttf"),
        RalewayLight: require("./assets/fonts/Raleway-Regular.ttf"),
        RalewayRegular: require("./assets/fonts/Raleway-SemiBold.ttf"),
        RalewayBold: require("./assets/fonts/Raleway-Bold.ttf"),
    })

    if (!loaded) return null

    return (
        <>
            <NavigationContainer>
                <Provider theme={theme}>
                    <Tab.Navigator
                        activeColor={COLORS.pri}
                        inactiveColor={"gray"}
                        barStyle={{
                            backgroundColor: "transparent",
                        }}
                        shifting={true}
                        sceneAnimationEnabled={true}
                        sceneAnimationType={"shifting"}
                    >
                        <Tab.Screen
                            name="home"
                            component={Home}
                            options={{
                                title: "Home",
                                tabBarColor: "red",

                                tabBarIcon: ({ color, focused }) => (
                                    <Entypo
                                        name="home"
                                        size={SIZES.xl}
                                        color={color}
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="profile"
                            component={Profile}
                            options={{
                                title: "Profile",
                                tabBarIcon: ({ color, focused }) => (
                                    <FontAwesome
                                        name="user"
                                        size={SIZES.xl}
                                        color={color}
                                    />
                                ),
                            }}
                        />
                    </Tab.Navigator>
                </Provider>
            </NavigationContainer>
        </>
    )
}
