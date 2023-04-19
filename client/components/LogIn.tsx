import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import BackBtn from "./BackBtn"
import { Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form"
import { Roles } from "./RoleCard"
import Form from "./Form"

interface LoginProps {
    email: string
    password: string
}

type Props = {
    control: Control<LoginProps, any>
    role: "" | Roles
    handleLogIn: () => void
    handleBack: (np: number) => void
    handleSubmit: UseFormHandleSubmit<LoginProps>
    errors: FieldErrors<LoginProps>
}

const LogIn = ({
    control,
    errors,
    handleBack,
    handleLogIn,
    handleSubmit,
    role,
}: Props) => {
    return (
        <View className="flex flex-col justify-center items-center w-full h-full">
            <BackBtn handleBack={handleBack} no={role === "user" ? 2 : 1} />
            {/*   Title   */}
            <Text
                style={{
                    fontFamily: "RalewayBold",
                }}
                className="text-3xl text-pri mb-10"
            >
                Enter Your Details
            </Text>
            {/*   Form   */}
            <Form
                control={control}
                errors={errors}
                inputs={[
                    {
                        inputName: "email",
                        inputType: "email",
                        icon: "envelope",
                        inputOptions: {
                            required: true,
                        },
                    },
                    {
                        inputName: "password",
                        inputType: "password",
                        icon: "user-lock",
                        inputOptions: {
                            required: true,
                            minLength: 3,
                            maxLength: 12,
                        },
                    },
                ]}
            />

            <TouchableOpacity
                disabled={role ? false : true}
                className="px-6 py-2 mt-10  bg-white dark:bg-black border-2 border-pri rounded-lg shadow-lg shadow-black  "
                onPress={handleSubmit(handleLogIn)}
            >
                <Text
                    style={{
                        fontFamily: "RalewayBold",
                    }}
                    className="capitalize text-lg text-sec"
                >
                    {"Next"}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default LogIn
