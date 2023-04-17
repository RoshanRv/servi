import { View, Text, Image, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import Layout from "../components/Layout"
import RoleCard, { Roles } from "../components/RoleCard"
import SelectRole from "../components/SelectRole"
import SelectWorker from "../components/SelectWorker"
import PersonalDetails from "../components/PersonalDetails"

type Props = {}

const Signup = (props: Props) => {
    const [stage, setStage] = useState(0)

    const handleNext = (no: number) => {
        setStage((e) => e + no)
    }
    const handleBack = () => {
        setStage((e) => e - 1)
    }

    const [role, setRole] = useState<"" | Roles>("")

    return (
        <Layout>
            {stage === 0 && (
                <SelectRole
                    role={role}
                    setRole={setRole}
                    handleNext={handleNext}
                />
            )}
            {stage === 1 && (
                <SelectWorker
                    role={role}
                    setRole={setRole}
                    handleNext={handleNext}
                />
            )}
            {stage === 2 && (
                <PersonalDetails
                    role={role}
                    setRole={setRole}
                    handleNext={handleNext}
                />
            )}
        </Layout>
    )
}

export default Signup
