import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import RoleCard, { Roles } from "./RoleCard"

type Props = {
    role: "" | Roles
    setRole: (role: Roles) => void
    handleNext: (np: number) => void
}

const SelectRole = ({ role, setRole, handleNext }: Props) => {
    return (
        <View className="flex flex-col justify-center items-center w-full h-full">
            {/*   Title   */}
            <Text
                style={{
                    fontFamily: "RalewayBold",
                }}
                className="text-3xl text-pri"
            >
                Enter Your Details
            </Text>
            {/*   Form   */}
            <View className="flex flex-row justify-around items-center w-full mt-16">
                <RoleCard
                    selectedRole={role}
                    setRole={setRole}
                    role="user"
                    src={require("../assets/user-avatar.webp")}
                />
                <RoleCard
                    selectedRole={role}
                    setRole={setRole}
                    role="worker"
                    src={require("../assets/worker-avatar.webp")}
                />
            </View>

            <TouchableOpacity
                disabled={role ? false : true}
                className="px-6 py-2 mt-10  bg-white dark:bg-black border-2 border-pri rounded-lg shadow-lg shadow-black  "
                onPress={() => handleNext(role === "user" ? 2 : 1)}
            >
                <Text
                    style={{
                        fontFamily: "RalewayBold",
                    }}
                    className="capitalize text-lg text-sec"
                >{role==='user'?'Sign Up':'Next'}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SelectRole
