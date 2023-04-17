import { View, Text, SafeAreaView, ImageBackground } from "react-native"
import React, { ReactNode } from "react"
import { StatusBar } from "expo-status-bar"

type Props = {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <SafeAreaView className="flex flex-1 justify-center w-full h-full items-center  ">
            <StatusBar
                animated={true}
                translucent={true}
                backgroundColor="transparent"
            />
            <ImageBackground
                resizeMode="cover"
                className="flex  justify-center w-full h-full items-center "
                source={require("../assets/bg.png")}
            >
                <View className="pt-8 w-full h-full">{children}</View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Layout
