import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { COLORS } from "../utils/constants"

type Props = {
    handleBack: (no: number) => void
    no: number
}

const BackBtn = ({ handleBack, no }: Props) => {
    return (
        <TouchableOpacity
            className="absolute top-3 left-3"
            onPress={() => handleBack(no)}
        >
            <Ionicons name="ios-chevron-back" size={36} color={COLORS.pri} />
        </TouchableOpacity>
    )
}

export default BackBtn
