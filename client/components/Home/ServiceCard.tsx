import { View, Text, Image, TouchableOpacity } from "react-native"
import React from "react"
import { data } from "../../screens/Home/Services"

type Props = {
    service: (typeof data)[0]
    index: number
    navigation: any
}

const ServiceCard = ({ service, index, navigation }: Props) => {
    return (
        <View
            className={`flex items-center  w-full relative px-2 ${
                index == 0 ? "my-0" : "my-8"
            } ${index % 2 == 0 ? "flex-row" : "flex-row-reverse"} `}
        >
            {/* Symbol - Icon  Div*/}
            <View className=" bg-pri border-2 border-sec/90 rounded-lg h-32 w-[25%] flex flex-col justify-center items-center shadow-lg shadow-black ">
                {service.icon}
            </View>
            {/* Image & Content Div */}
            <View
                className={`${
                    index % 2 == 0
                        ? "-ml-2 flex-row"
                        : " -ml-2 pr-4 flex-row-reverse"
                }  flex  rounded-lg bg-gray-100 dark:bg-gray-900 shadow-xl shadow-black w-[77%] border-2 border-pri/50 `}
            >
                {/* Avatar */}
                <View
                    className={`w-32 h-36 ${
                        index % 2 == 0 ? "-translate-x-16" : "translate-x-16"
                    } drop-shadow-lg `}
                >
                    <Image source={service.img} className="w-full h-full" />
                </View>
                {/* Content */}
                <View
                    className={`flex flex-col gap-y-4 p-3 items-start justify-center w-[80%] ${
                        index % 2 == 0 ? "-ml-16" : "-mr-16"
                    }`}
                >
                    {/* Service */}
                    <Text
                        style={{
                            fontFamily: "RalewayBold",
                        }}
                        className="text-pri capitalize text-3xl"
                    >
                        {service.service}
                    </Text>
                    {/* Desc */}
                    <Text
                        style={{
                            fontFamily: "RalewayRegular",
                        }}
                        className="text-base text-sec capitalize"
                    >
                        {service.description}
                    </Text>
                    {/* Btn */}
                    <TouchableOpacity
                        onPress={() => {
                            navigation.push("service", {
                                service: service.service,
                            })
                        }}
                        className="px-6 py-2 rounded-lg bg-pri border-sec shadow-lg shadow-black/60 border-2"
                    >
                        <Text
                            style={{
                                fontFamily: "RalewayBold",
                            }}
                            className="text-white"
                        >
                            Book Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ServiceCard
