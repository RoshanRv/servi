import { View, Text, TouchableOpacity, TextInput } from "react-native"
import React, { useEffect } from "react"
import RoleCard, { Roles } from "./RoleCard"
import type { Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form"
import Form from "./Form"
import BackBtn from "./BackBtn"
import { AntDesign } from "@expo/vector-icons"
import { COLORS } from "../utils/constants"
import { PersonalDetailsProps } from "../screens/Signup"

type Props = {
    role: "" | Roles
    handleNext: (np: number) => void
    handleBack: (np: number) => void
    control: Control<PersonalDetailsProps>
    handleSubmit: UseFormHandleSubmit<PersonalDetailsProps>
    errors: FieldErrors<PersonalDetailsProps>
}

const PersonalDetails = ({
    role,
    handleNext,
    handleBack,
    control,
    errors,
    handleSubmit,
}: Props) => {
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
                    role === "user"
                        ? {
                              inputName: "address",
                              inputType: "multiline",
                              icon: "map-marker-alt",
                              inputOptions: {
                                  required: true,
                              },
                          }
                        : {
                              inputName: "aadharNo",
                              labelName: "Aaadhar No",
                              icon: "address-book",
                              inputType: "numeric",
                              inputOptions: {
                                  required: true,
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
                    {"Sign Up"}
                </Text>
            </TouchableOpacity>
            {/*   Note - Only Worker   */}
            {role !== "user" && (
                <View className=" -mb-10  mt-6 p-3 rounded-lg flex flex-row items-center w-[90%] bg-white dark:bg-black border-2 border-pri shadow-lg shadow-black ">
                    <AntDesign name="infocirlce" size={24} color={COLORS.sec} />
                    {/* Info */}
                    <View className="text-pri w-[95%]">
                        <Text
                            className="pl-3 text-pri"
                            style={{
                                fontFamily: "RalewayRegular",
                            }}
                        >
                            Your profile details will only be visible to users
                            after they have been verified by our admin team.
                        </Text>
                        <Text
                            className="pl-3 pt-2 text-pri"
                            style={{
                                fontFamily: "RalewayRegular",
                            }}
                        >
                            You can check the status of your verification in
                            your profile settings.
                        </Text>
                    </View>
                </View>
            )}
        </View>
    )
}

export default PersonalDetails
