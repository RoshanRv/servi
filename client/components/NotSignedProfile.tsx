import { View, Text, TouchableOpacity, Image } from "react-native"
import React from "react"
import { Feather } from "@expo/vector-icons"
import { COLORS } from "../utils/constants"

type Props = {
    navigation: any
}

const NotSignedProfile = ({ navigation }: Props) => {
    return (
        <View className="w-full h-full ">
            <Text
                style={{
                    fontFamily: "RalewayBold",
                }}
                className="text-2xl text-pri text-center"
            >
                Not Signed In
            </Text>
            <Text
                style={{
                    fontFamily: "RalewayRegular",
                }}
                className=" text-black text-center "
            >
                Sign In To Access Your Previous Orders
            </Text>
            {/*   Sign In & Sign Up    */}
            <View className="flex flex-row justify-around mt-6">
                {/* Sign Up */}
                <TouchableOpacity className="flex flex-row p-2 bg-pri px-6 rounded-lg border-2 border-white shadow-lg shadow-black/70">
                    <Feather name="user-plus" size={24} color={"white"} />
                    <Text
                        onPress={() => navigation.push("signup")}
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
                        onPress={() => navigation.push("signin")}
                        className="pl-4 text-pri"
                        style={{
                            fontFamily: "RalewayBold",
                        }}
                    >
                        Sign In
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NotSignedProfile
