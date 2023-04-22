import { View, Text, Image, TouchableOpacity } from "react-native"
import { useState } from "react"
import Layout from "../../components/Layout"
import useUser from "../../store/useUser"
import NotSignedProfile from "../../components/Profile/NotSignedProfile"
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons"
import { COLORS, SIZES } from "../../utils/constants"
import DropDownPicker from "react-native-dropdown-picker"

type Props = {
    navigation: any
}

const data = [
    { label: "English", value: "en" },
    { label: "தமிழ்", value: "ta" },
]

const ProfileSettings = ({ navigation }: Props) => {
    const user = useUser((state) => state.user)
    const [language, setLanguage] = useState("en")
    const [openLanguage, setOpenLanguage] = useState(false)

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
                <>
                    <Text
                        style={{
                            fontFamily: "RalewayBold",
                        }}
                        className="text-2xl text-pri text-center"
                    >
                        {user.name}
                    </Text>
                    <TouchableOpacity className=" w-40 mx-auto flex flex-row p-2 bg-white px-6 rounded-lg border-2 border-pri shadow-lg shadow-black/70 mt-8 ">
                        <Feather name="log-out" size={24} color={COLORS.pri} />
                        <Text
                            onPress={() => navigation.push("signin")}
                            className="pl-4 text-pri "
                            style={{
                                fontFamily: "RalewayBold",
                            }}
                        >
                            Sign Out
                        </Text>
                    </TouchableOpacity>
                </>
            )}
            {/*    Settings   */}
            <View className="w-[90%]  flex flex-col gap-y-6 pt-0 pb-6 rounded-lg bg-white dark:bg-gray-900 px-5 text-center mx-auto mt-20 shadow-lg shadow-black ">
                {/*    User Details  - User/Worker Only */}
                {user && (
                    <TouchableOpacity className=" flex flex-row items-center justify-between">
                        <View className="flex flex-row items-center ">
                            <FontAwesome5
                                name="user-alt"
                                size={SIZES.sm}
                                color={"gray"}
                            />
                            <Text
                                className="text-gray-800  pl-6"
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
                <View className=" flex flex-row items-center justify-between ">
                    <View className="flex flex-row  ">
                        <Ionicons
                            name="language"
                            size={SIZES.lg}
                            color={"gray"}
                        />
                        <Text
                            className="text-gray-800  pl-4 "
                            style={{
                                fontFamily: "RalewayRegular",
                            }}
                        >
                            Select Language
                        </Text>
                    </View>
                    {/*  Select Input... */}
                    <View className="w-[40%] self-end ">
                        <DropDownPicker
                            bottomOffset={10}
                            placeholder={"Select Language" as string}
                            textStyle={{
                                color: "gray",
                                fontWeight: "500",
                                fontFamily: "RalewayRegular",
                            }}
                            style={{
                                borderColor: "white",
                            }}
                            dropDownContainerStyle={{
                                borderColor: "white",
                                shadowColor: "gray",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.22,
                                shadowRadius: 2.22,

                                elevation: 3,
                            }}
                            open={openLanguage}
                            setOpen={setOpenLanguage}
                            value={language}
                            setValue={setLanguage}
                            items={data}
                        />
                    </View>
                </View>
                {/*     Previous Bookings    - User/Woker Only */}
                {user && (
                    <TouchableOpacity className=" flex flex-row items-center justify-between">
                        <View className="flex flex-row items-center ">
                            <FontAwesome5
                                name="wpforms"
                                size={SIZES.sm}
                                color={"gray"}
                            />
                            <Text
                                className="text-gray-800  pl-6"
                                style={{
                                    fontFamily: "RalewayRegular",
                                }}
                            >
                                Previous Bookings
                            </Text>
                        </View>
                        <Ionicons
                            name="ios-chevron-forward"
                            size={SIZES.lg}
                            color={"gray"}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </Layout>
    )
}

export default ProfileSettings
