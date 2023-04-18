import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import RoleCard, { Roles } from "./RoleCard"
import BackBtn from "./BackBtn"

type Props = {
    role: "" | Roles
    setRole: (role: Roles) => void
    handleNext: (np: number) => void
    handleBack: (np: number) => void
    action: "Sign Up" | "Sign In"
}

const SelectWorker = ({
    handleNext,
    role,
    setRole,
    handleBack,
    action,
}: Props) => {
    return (
        <View className="flex flex-col justify-center items-center w-full h-full">
            <BackBtn handleBack={handleBack} no={1} />

            {/*   Title   */}
            <Text
                style={{
                    fontFamily: "RalewayBold",
                }}
                className="text-3xl text-pri"
            >
                {`${action} As Worker`}
            </Text>
            {/*   Roles   */}
            <View className="flex flex-row justify-around items-center w-full mt-16">
                <RoleCard
                    selectedRole={role}
                    setRole={setRole}
                    role="electrician"
                    src={require("../assets/electrician-avatar.webp")}
                />
                <RoleCard
                    selectedRole={role}
                    setRole={setRole}
                    role="plumber"
                    src={require("../assets/plumber-avatar.webp")}
                />
            </View>
            <View className="flex flex-row justify-around items-center w-full mt-16">
                <RoleCard
                    selectedRole={role}
                    setRole={setRole}
                    role="carpenter"
                    src={require("../assets/carpenter-avatar.webp")}
                />
                <RoleCard
                    selectedRole={role}
                    setRole={setRole}
                    role="cleaner"
                    src={require("../assets/cleaner-avatar.png")}
                />
            </View>
            <TouchableOpacity
                disabled={role ? false : true}
                className="px-6 py-2 mt-10  bg-white dark:bg-black border-2 border-pri rounded-lg shadow-lg shadow-black  "
                onPress={() => handleNext(1)}
            >
                <Text
                    style={{
                        fontFamily: "RalewayBold",
                    }}
                    className="capitalize text-lg text-sec"
                >{`${action} As ${role}`}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SelectWorker
