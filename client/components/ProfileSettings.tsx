import { View, Text, Image, TouchableOpacity } from "react-native"
import React from "react"
import Layout from "./Layout"
import useUser from "../store/useUser"
import NotSignedProfile from "./NotSignedProfile"
import { FontAwesome5, Ionicons } from "@expo/vector-icons"
import { SIZES } from "../utils/constants"

type Props = {
    navigation: any
}

const ProfileSettings = ({ navigation }: Props) => {
    const user = useUser((state) => state.user)

    return (
        <Layout>
            <View className="w-32 h-32 mx-auto bg-pri rounded-full border-2 border-white overflow-hidden ">
                {/* Image of User/ Worker */}
                <Image
                    source={
                        user?.role === "worker"
                            ? require("../assets/worker-avatar.webp")
                            : require("../assets/user-avatar.webp")
                    }
                    className="w-full h-full"
                />
            </View>
            {/*    Not Signed In  (SignIn/Up Button) */}
            {!user && <NotSignedProfile navigation={navigation} />}
            {/*    Signed In - Username  */}
            {user && (
                <Text
                    style={{
                        fontFamily: "RalewayBold",
                    }}
                    className="text-2xl text-pri text-center"
                >
                    {user.name}
                </Text>
            )}
            {/*    Settings   */}
            <View className="w-[90%] rounded-lg bg-white dark:bg-gray-900 p-3">
                {/*    User Details  - User/Worker Only */}
                {user && (
                    <TouchableOpacity className=" flex flex-row items-center justify-between">
                        <View className="flex flex-row">
                            <FontAwesome5
                                icon="user-alt"
                                size={SIZES.lg}
                                color={"gray"}
                            />
                            <Text
                                className="text-gray-800 text-lg pl-4"
                                style={{
                                    fontFamily: "RalewayRegular",
                                }}
                            >
                                Edit User Details
                            </Text>
                        </View>
                        <Ionicons
                            name="ios-chevron-forward"
                            size={SIZES.lg}
                            color={"gray"}
                        />
                    </TouchableOpacity>
                )}
                {/*     Select Language     */}
                <View className=" flex flex-row items-center justify-between">
                    <View className="flex flex-row">
                        <Ionicons
                            name="language"
                            size={SIZES.lg}
                            color={"gray"}
                        />
                        <Text
                            className="text-gray-800 text-lg pl-4"
                            style={{
                                fontFamily: "RalewayRegular",
                            }}
                        >
                            Select Language
                        </Text>
                    </View>
                    {/*  Select Input... */}
                </View>
            </View>
        </Layout>
    )
}

export default ProfileSettings
