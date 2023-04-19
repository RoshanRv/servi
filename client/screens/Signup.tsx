import React, { useState } from "react"
import Layout from "../components/Layout"
import type { Roles } from "../components/RoleCard"
import SelectRole from "../components/SelectRole"
import SelectWorker from "../components/SelectWorker"
import PersonalDetails from "../components/PersonalDetails"
import CredentialsDetails from "../components/CredentialsDetails"
import { useForm } from "react-hook-form"

type Props = {}

export interface CredentialsDetailsProps {
    email: string
    password: string
    confirmPassword: string
}

export interface PersonalDetailsProps {
    username: string
    phone: string
    address: string
    aadharNo: string
}

const Signup = (props: Props) => {
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
    } = useForm<CredentialsDetailsProps>({})

    const {
        control: personalControl,
        handleSubmit: handlePersonalSubmit,
        formState: { errors: personalErrors },
    } = useForm<PersonalDetailsProps>({})

    return (
        <Layout>
            {/*    Select Role - User / Worker  */}
            {stage === 0 && (
                <SelectRole
                    action="Sign Up"
                    role={role}
                    setRole={setRole}
                    handleNext={handleNext}
                />
            )}
            {/*   Select Worker - Only For Worker   */}
            {stage === 1 && (
                <SelectWorker
                    action="Sign Up"
                    role={role}
                    setRole={setRole}
                    handleNext={handleNext}
                    handleBack={handleBack}
                />
            )}
            {/*     Credential Details Such As Email, Password     */}
            {stage === 2 && (
                <CredentialsDetails
                    errors={credentialErrors}
                    control={credentialControl}
                    setError={setError}
                    handleSubmit={handleCredentialSubmit}
                    role={role}
                    handleNext={handleNext}
                    handleBack={handleBack}
                />
            )}
            {/*    Personal Details Such As Name, Phone  */}
            {stage === 3 && (
                <PersonalDetails
                    control={personalControl}
                    errors={personalErrors}
                    handleSubmit={handlePersonalSubmit}
                    role={role}
                    handleNext={handleNext}
                    handleBack={handleBack}
                />
            )}
            {/*    Payment Details - Only for Worker  */}
        </Layout>
    )
}

export default Signup
