import { View ,Text, TextInput} from "react-native"
import {Controller,useForm} from 'react-hook-form'

interface Props{

}

interface FormType{
    name:string
    age:number
}

const Form = ({}:Props)=>{


    const {control,handleSubmit,formState:{errors}} = useForm<FormType>()

    return (
        <View className="bg-gray-100 dark:bg-gray-900 p-3 rounded-lg shadow-xl shadow-black " >
            <Controller rules={{
                required:'true',

            }} control={control} name="name" render={()=><TextInput inputMode="text"  />} />

        </View>
    )
}

export default Form