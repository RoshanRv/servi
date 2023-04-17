import { View, Text, TouchableOpacity } from "react-native"
import Slider from "./Slider"
import { Feather } from "@expo/vector-icons"
import { COLORS } from "../utils/constants"

type Props = {}

const HomeHeader = (props: Props) => {
    return (
        <View
            style={{
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
            }}
            className="bg-se py-10 pb-12 "
        >
            <Slider />
            {/*   Sign In & Sign Up    */}
            <View className="flex flex-row justify-around mt-6">
                {/* Sign Up */}
                <TouchableOpacity className="flex flex-row p-2 bg-pri px-6 rounded-lg border-2 border-white shadow-lg shadow-black/70">
                    <Feather name="user-plus" size={24} color={"white"} />
                    <Text
                        className="pl-4 text-white "
                        style={{
                            fontFamily: "RalewayBold",
                        }}
                    >
                        Sign Up
                    </Text>
                </TouchableOpacity>
                {/* Sign In */}
                <TouchableOpacity className="flex flex-row p-2 bg-white px-6 rounded-lg border-2 border-pri shadow-lg shadow-black/70">
                    <Feather name="log-in" size={24} color={COLORS.pri} />
                    <Text
                        className="pl-4 text-pri"
                        style={{
                            fontFamily: "RalewayBold",
                        }}
                    >
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
            {/* Title */}
            <Text
                style={{
                    fontFamily: "RalewayBold",
                }}
                className="text-pri w-max mx-auto text-4xl mt-16"
            >
                Our Services
            </Text>
        </View>
    )
}

export default HomeHeader
