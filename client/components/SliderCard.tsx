import { View, Text, Image, TouchableOpacity } from "react-native"
import React from "react"
import { COLORS, services } from "../utils/constants"
import { LinearGradient } from "expo-linear-gradient"

type Props = {
    service: typeof services[0]
}

const SliderCard = ({ service }: Props) => {
    return (
        <LinearGradient
            colors={[service.bg, service.bg2]}
            // locations={[0.3, 1]}
            start={{
                x: 1,
                y: 0,
            }}
            end={{
                x: 0,
                y: 1,
            }}
            className={` z-50 relative items-center justify-around h-48 flex flex-row shadow-xl shadow-black rounded-lg w-[90%] mx-5 `}
        >
            {/*    Image  */}
            <View className="absolute w-40 h-52 -top-5 -left-7">
                <Image className="w-full h-full " source={service.img} />
            </View>
            {/* Dummy.. */}
            <View></View>
            {/* Title & Desc. */}
            <View className="h-full w-[65%] ml-auto  flex flex-col items-start justify-center pl-6 gap-y-2 pr-1">
                <Text
                    style={{
                        fontFamily: "RalewayBold",
                    }}
                    className="capitalize text-4xl  text-white"
                >
                    {service.service}
                </Text>
                <Text
                    style={{
                        fontFamily: "RalewayRegular",
                    }}
                    className="capitalize  text-sec"
                >
                    {service.description}
                </Text>
            </View>
        </LinearGradient>
    )
}

export default SliderCard
