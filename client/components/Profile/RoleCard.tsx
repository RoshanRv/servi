import { View, Text, Image, TouchableOpacity } from "react-native"
import React from "react"

export type Roles =
    | "user"
    | "worker"
    | "electrician"
    | "plumber"
    | "carpenter"
    | "cleaner"

type Props = {
    role: Roles
    src: any
    selectedRole: "" | Roles
    setRole: (role: Roles) => void
}

const RoleCard = ({ role, src, selectedRole, setRole }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => setRole(role)}
            className={`bg-pri shadow-lg shadow-black p-2 rounded-xl border-4 ${
                selectedRole === role
                    ? "border-white dark:border-black scale-110 "
                    : "border-pri"
            } `}
        >
            <View className="w-24 h-10  relative rounded-full">
                <Image source={src} className="w-full h-32  absolute -top-16" />
            </View>
            <Text
                className="text-center text-xl text-sec mt-6 capitalize "
                style={{
                    fontFamily: "RalewayBold",
                }}
            >
                {role}
            </Text>
        </TouchableOpacity>
    )
}

export default RoleCard
