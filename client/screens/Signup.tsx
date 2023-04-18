import { View, Text, Image, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import Layout from "../components/Layout"
import RoleCard, { Roles } from "../components/RoleCard"
import SelectRole from "../components/SelectRole"
import SelectWorker from "../components/SelectWorker"
import PersonalDetails from "../components/PersonalDetails"
import CredentialsDetails from "../components/CredentialsDetails"

type Props = {}

const Signup = (props: Props) => {
    const [stage, setStage] = useState(0)

    const handleNext = (no: number) => {
        setStage((e) => e + no)
    }
    const handleBack = (no: number) => {
        setStage((e) => e - no)
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
                    handleBack={handleBack}
                />
            )}
            {stage === 2 && (
                <CredentialsDetails
                    role={role}
                    handleNext={handleNext}
                    handleBack={handleBack}
                />
            )}
            {stage === 3 && (
                <PersonalDetails
                    role={role}
                    handleNext={handleNext}
                    handleBack={handleBack}
                />
            )}
        </Layout>
    )
}

export default Signup
