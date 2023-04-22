import React, { useState } from "react"
import Layout from "../../components/Layout"
import type { Roles } from "../../components/Profile/RoleCard"
import SelectRole from "../../components/Profile/SelectRole"
import SelectWorker from "../../components/Profile/SelectWorker"
import { useForm } from "react-hook-form"
import LogIn from "../../components/Profile/LogIn"

type Props = {
    navigation: any
}

export interface LoginProps {
    email: string
    password: string
}

const SignIn = ({ navigation }: Props) => {
    const [stage, setStage] = useState(0)

    const handleNext = (no: number) => {
        setStage((e) => e + no)
    }
    const handleBack = (no: number) => {
        setStage((e) => e - no)
    }

    const [role, setRole] = useState<"" | Roles>("")

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginProps>({})

    const handleLogIn = () => {}

    return (
        <Layout>
            {/*    Select Role - User / Worker  */}
            {stage === 0 && (
                <SelectRole
                    navigation={navigation}
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
                    errors={errors}
                    control={control}
                    handleSubmit={handleSubmit}
                    handleLogIn={handleLogIn}
                    role={role}
                    handleBack={handleBack}
                />
            )}
        </Layout>
    )
}

export default SignIn
