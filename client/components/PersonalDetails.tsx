import { View, Text, TouchableOpacity, TextInput } from "react-native"
import React, { useEffect } from "react"
import RoleCard, { Roles } from "./RoleCard"
import { Controller, useForm } from "react-hook-form"
import Form from "./Form"
import BackBtn from "./BackBtn"

type Props = {
    role: "" | Roles
    handleNext: (np: number) => void
    handleBack: (np: number) => void
}

interface PersonalDetailsProps {
    username: string
    phone: string
}

const PersonalDetails = ({ role, handleNext, handleBack }: Props) => {
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<PersonalDetailsProps>({})

    return (
        <View className="flex flex-col justify-center items-center w-full h-full">
            <BackBtn handleBack={handleBack} no={1} />
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
                        inputName: "username",
                        inputType: "text",
                        icon: "user-alt",
                        inputOptions: {
                            required: true,
                        },
                    },
                    {
                        inputName: "phone",
                        inputType: "tel",
                        icon: "phone-alt",
                        inputOptions: {
                            required: true,
                            maxLength: 11,
                        },
                    },
                ]}
            />

            <TouchableOpacity
                disabled={role ? false : true}
                className="px-6 py-2 mt-10  bg-white dark:bg-black border-2 border-pri rounded-lg shadow-lg shadow-black  "
                onPress={handleSubmit(
                    (e) => console.log(e),
                    (e) => console.log(e)
                )}
            >
                <Text
                    style={{
                        fontFamily: "RalewayBold",
                    }}
                    className="capitalize text-lg text-sec"
                >
                    {role === "user" ? "Sign Up" : "Next"}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default PersonalDetails
