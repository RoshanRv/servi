import { View, Text } from "react-native"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Signup from "./Signup"
import SignIn from "./SignIn"
import useUser from "../store/useUser"
import ProfileSettings from "../components/ProfileSettings"

type Props = {}

const Profile = (props: Props) => {
    const Stack = createNativeStackNavigator()

    const user = useUser((state) => state.user)

    return (
        <Stack.Navigator
            initialRouteName="profileSettings"
            screenOptions={{
                headerShown: false,
                customAnimationOnGesture: true,
                animation: "slide_from_right",
            }}
        >
            <Stack.Screen name="profileSettings" component={ProfileSettings} />
            <Stack.Screen name="signup" component={Signup} />
            <Stack.Screen name="signin" component={SignIn} />
        </Stack.Navigator>
    )
}

export default Profile
