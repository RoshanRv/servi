import { View, Text, Image, TouchableOpacity } from "react-native"
import {useState} from "react"
import Layout from "./Layout"
import useUser from "../store/useUser"
import NotSignedProfile from "./NotSignedProfile"
import { FontAwesome5, Ionicons } from "@expo/vector-icons"
import { SIZES } from "../utils/constants"
import DropDownPicker from "react-native-dropdown-picker"

type Props = {
    navigation: any
}

const data=[{label:'English',value:'en'},{label:"தமிழ்",value:'ta'}
]


const ProfileSettings = ({ navigation }: Props) => {
    const user = useUser((state) => state.user)
    const [language,setLanguage] = useState("English")
    const [openLanguage,setOpenLanguage] = useState(false)

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
                    <DropDownPicker
                    bottomOffset={10}
                    dropDownDirection="BOTTOM"
                    placeholder={("Select Language") as string}
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
        </Layout>
    )
}

export default ProfileSettings
