import { View, Text } from "react-native"
import React from "react"

type Props = {
    service: "string"
}

const ServiceHeader = ({ service }: Props) => {
    return (
        <View className="px-4 text-center">
            <Text
                style={{
                    fontFamily: "RalewayBold",
                }}
                className="text-pri text-3xl capitalize text-center"
            >{`${service}s Near By You !!`}</Text>
        </View>
    )
}

export default ServiceHeader
