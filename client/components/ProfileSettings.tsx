import { View, Text, Image } from "react-native"
import React from "react"
import Layout from "./Layout"
import useUser from "../store/useUser"
import NotSignedProfile from "./NotSignedProfile"

type Props = {
    navigation: any
}

const ProfileSettings = ({ navigation }: Props) => {
    const user = useUser((state) => state.user)

    return (
        <Layout>
            <View className="w-32 h-32 mx-auto bg-pri rounded-full border-2 border-white overflow-hidden ">
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
        </Layout>
    )
}

export default ProfileSettings
