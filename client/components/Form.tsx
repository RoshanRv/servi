import { View, Text, TextInput, InputModeOptions } from "react-native"
import {
    Controller,
    Control,
    FieldValues,
    FieldErrors,
    Path,
    RegisterOptions,
} from "react-hook-form"
import errorMsg from "../utils/errorMsg"
import { COLORS, SIZES } from "../utils/constants"
import toCapitalize from "../utils/toCapitalize"
import { FontAwesome5, Ionicons } from "@expo/vector-icons"

interface InputProps<T extends FieldValues> {
    inputName: keyof T
    inputType: InputModeOptions | "password"
    inputOptions?: Omit<
        RegisterOptions<T, Path<T>>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >
    icon: string
}
interface Props<T extends FieldValues> {
    inputs: Array<InputProps<T>>
    control: Control<T, any>
    errors: FieldErrors<T>
}

const Form = <T extends FieldValues>({ inputs, errors, control }: Props<T>) => {
    return (
        <View className=" bg-gray-100 dark:bg-gray-900 p-4 pb-8 px-6 rounded-lg shadow-xl shadow-black w-[90%] border-2 border-pri">
            {inputs.map((input, i) => (
                <View key={i} className="py-1 flex flex-row items-center ">
                    {/* Icon */}
                    <FontAwesome5
                        name={input.icon}
                        size={SIZES.sm}
                        color={COLORS.pri}
                    />
                    <View className="w-[95%] pl-3">
                        {/* Label */}
                        <Text
                            style={{
                                fontFamily: "RalewayRegular",
                            }}
                            className="px-2 text-sm text-pri dark:text-gray-300 capitalize -mb-2"
                        >
                            {input.inputName as string}
                        </Text>
                        {/* Input */}
                        <Controller
                            rules={{ ...input.inputOptions }}
                            control={control}
                            name={input.inputName as Path<T>}
                            render={({
                                field: { onChange, value, onBlur },
                            }) => (
                                <TextInput
                                    secureTextEntry={
                                        input.inputType === "password"
                                    }
                                    onBlur={onBlur}
                                    value={value}
                                    onChangeText={onChange}
                                    style={{
                                        fontFamily: "RalewayRegular",
                                    }}
                                    placeholderTextColor={"gray"}
                                    cursorColor={COLORS.sec}
                                    inputMode={
                                        input.inputType === "password"
                                            ? "text"
                                            : input.inputType
                                    }
                                    autoCapitalize="none"
                                    className=" w-full p-2 pb-1 border-b-2 border-pri placeholder-shown:bg-gr outline-300 text-lg placeholder:text-gray-600 "
                                />
                            )}
                        />
                        {/* Errors */}
                        {errors[input.inputName] && (
                            <Text
                                style={{
                                    fontFamily: "RalewayRegular",
                                }}
                                className=" capitalize py-1 px-3 text-red-500"
                            >
                                {
                                    errorMsg(
                                        input.inputName as string,
                                        errors[input.inputName]?.type
                                    ) as string
                                }
                            </Text>
                        )}
                    </View>
                </View>
            ))}
        </View>
    )
}

export default Form
