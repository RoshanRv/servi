import { View, Text } from "react-native"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Signup from "./Signup"
import SignIn from "./SignIn"

type Props = {}

const Profile = (props: Props) => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                customAnimationOnGesture: true,
                animation: "slide_from_right",
            }}
        >
            {/* <Stack.Screen name="signup" component={Signup} /> */}
            <Stack.Screen name="signin" component={SignIn} />
        </Stack.Navigator>
    )
}

export default Profile
