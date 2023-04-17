import { View, Text, Image, TouchableOpacity, Animated } from "react-native"
import React, { useEffect, useRef, useState } from "react"
import { data } from "../screens/Service"
import { FontAwesome5 } from "@expo/vector-icons"
import { COLORS, SIZES } from "../utils/constants"

type Props = {
    details: typeof data[0]
    navigation: any
}

interface TemplateProps {
    info: string
    icon: "user-alt" | "phone-alt" | "envelope" | "money-bill"
    main?: boolean
}

const Template = ({ icon, info, main = false }: TemplateProps) => {
    return (
        <View className="flex flex-row gap-x-4 text-pri items-center w-min">
            {!main && (
                <FontAwesome5 name={icon} size={SIZES.sm} color={COLORS.pri} />
            )}
            <Text
                className={`${
                    main
                        ? "text-pri text-2xl pb-2"
                        : "text-lg  text-black dark:text-white"
                } w-[80%]`}
                style={{
                    fontFamily: main ? "RalewayBold" : "RalewayRegular",
                }}
            >
                {info}
            </Text>
        </View>
    )
}

const BookServiceCard = ({ details, navigation }: Props) => {
    const opacity = useRef(new Animated.Value(0.2)).current
    const [opacityVal, setOpacity] = useState(false)

    useEffect(() => {
        Animated.spring(opacity, {
            toValue: opacityVal ? 1 : 0.2,
            useNativeDriver: true,
        }).start()
    }, [opacityVal])

    useEffect(() => {
        const opacityInterval = setInterval(() => {
            setOpacity((e) => !e)
        }, 500)

        return () => clearInterval(opacityInterval)
    }, [])

    const returnImg = (service: string) => {
        let imgSrc

        switch (service) {
            case "electrician":
                imgSrc = require(`../assets/electrician-avatar.webp`)
                break
        }

        return imgSrc
    }
    return (
        <View className="w-[90%] p-3  rounded-lg  my-4 mx-auto bg-gray-100  dark:bg-gray-900 border-2 border-pri">
            <View className="flex flex-row justify-between items-center ">
                {/* Img */}
                <View className="h-40 w-32 bg-pri rounded-lg border-2 border-sec">
                    <Image
                        source={returnImg(details.service)}
                        className="w-full h-full"
                    />
                </View>
                {/* Details */}
                <View className="flex flex-col pl-4 w-[70%] relative ">
                    {/* Name */}
                    <Template icon="user-alt" info={details.name} main />
                    {/* isActive  */}
                    <View className="flex flex-row py-2 items-center ">
                        <Animated.View
                            style={{
                                opacity: opacity,
                            }}
                            className={`  w-2 h-2  rounded-full ${
                                details.isActive ? "bg-green-600" : "bg-red-600"
                            }`}
                        />
                        <Text
                            className="pl-2 text-lg text-black dark:text-white"
                            style={{
                                fontFamily: "RalewayRegular",
                            }}
                        >
                            {details.isActive ? "Active" : "Busy"}
                        </Text>
                    </View>
                    {/* Phone */}
                    <Template icon="phone-alt" info={details.phone} />

                    {/* Mail */}
                    <Template icon="envelope" info={details.mail} />
                    {/* Price */}
                    <Template icon="money-bill" info={details.price} />
                </View>
            </View>
            {/* Button */}
            <TouchableOpacity
                onPress={() => {
                    navigation.push("servicemenDetails", {
                        id: details.id,
                    })
                }}
                className="mx-auto mt-4 py-2 bg-pri w-max rounded-lg text-center border-2 border-sec"
            >
                <Text
                    style={{
                        fontFamily: "RalewayBold",
                    }}
                    className="w-40 text-sec text-center"
                >
                    Book Now !!!
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BookServiceCard
