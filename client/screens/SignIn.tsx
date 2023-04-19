import React, { useState } from "react"
import Layout from "../components/Layout"
import type { Roles } from "../components/RoleCard"
import SelectRole from "../components/SelectRole"
import SelectWorker from "../components/SelectWorker"
import PersonalDetails from "../components/PersonalDetails"
import CredentialsDetails from "../components/CredentialsDetails"
import { useForm } from "react-hook-form"
import LogIn from "../components/LogIn"

type Props = {}

export interface LoginProps {
    email: string
    password: string
}

const SignIn = (props: Props) => {
    const [stage, setStage] = useState(0)

    const handleNext = (no: number) => {
        setStage((e) => e + no)
    }
    const handleBack = (no: number) => {
        setStage((e) => e - no)
    }

    const [role, setRole] = useState<"" | Roles>("")

    const {
        control: credentialControl,
        handleSubmit: handleCredentialSubmit,
        formState: { errors: credentialErrors },
        setError,
    } = useForm<LoginProps>({})

    return (
        <Layout>
            {/*    Select Role - User / Worker  */}
            {stage === 0 && (
                <SelectRole
                    action="Sign In"
                    role={role}
                    setRole={setRole}
                    handleNext={handleNext}
                />
            )}
            {/*   Select Worker - Only For Worker   */}
            {stage === 1 && (
                <SelectWorker
                    action="Sign In"
                    role={role}
                    setRole={setRole}
                    handleNext={handleNext}
                    handleBack={handleBack}
                />
            )}
            {/*     Credential Details Such As Email, Password     */}
            {stage === 2 && (
                <LogIn
                    errors={credentialErrors}
                    control={credentialControl}
                    handleSubmit={handleCredentialSubmit}
                    role={role}
                    handleBack={handleBack}
                />
            )}
        </Layout>
    )
}

export default SignIn
