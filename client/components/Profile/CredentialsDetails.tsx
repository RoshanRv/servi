import { View, Text, TouchableOpacity, TextInput } from "react-native"
import React, { useEffect } from "react"
import RoleCard, { Roles } from "./RoleCard"
import type {
    Control,
    FieldErrors,
    UseFormHandleSubmit,
    UseFormSetError,
} from "react-hook-form"
import Form from "../Form"
import BackBtn from "./BackBtn"
import { CredentialsDetailsProps } from "../../screens/Profile/Signup"

type Props = {
    control: Control<CredentialsDetailsProps, any>
    role: "" | Roles
    handleNext: (np: number) => void
    handleBack: (np: number) => void
    setError: UseFormSetError<CredentialsDetailsProps>
    handleSubmit: UseFormHandleSubmit<CredentialsDetailsProps>
    errors: FieldErrors<CredentialsDetailsProps>
}

const CredentialsDetails = ({
    role,
    handleNext,
    handleBack,
    control,
    setError,
    handleSubmit,
    errors,
}: Props) => {
    const handleCredentials = (e: CredentialsDetailsProps) => {
        if (e.password !== e.confirmPassword) {
            setError(
                "confirmPassword",
                {
                    type: "mismatch",
                },
                {
                    shouldFocus: true,
                }
            )
        } else {
            handleNext(1)
        }
    }

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
                    {
                        inputName: "confirmPassword",
                        labelName: "Confirm Password",
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
                onPress={handleSubmit(handleCredentials)}
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

export default CredentialsDetails
