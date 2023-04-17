import { View, Text } from "react-native"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Services from "./Services"
import Service from "./Service"
import ServicemenDetails from "./ServicemenDetails"

type Props = {}

const Home = (props: Props) => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                customAnimationOnGesture: true,
                animation: "slide_from_right",
            }}
        >
            <Stack.Screen name="services" component={Services} />
            <Stack.Screen name="service" component={Service} />
            <Stack.Screen
                name="servicemenDetails"
                component={ServicemenDetails}
            />
        </Stack.Navigator>
    )
}

export default Home
