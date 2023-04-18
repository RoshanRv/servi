import { FieldErrors, FieldValues, LiteralUnion } from "react-hook-form"

const errorMsg = (
    inputName: string,
    type:
        | LiteralUnion<
              | "valueAsNumber"
              | "valueAsDate"
              | "setValueAs"
              | "disabled"
              | "required"
              | "min"
              | "max"
              | "maxLength"
              | "minLength"
              | "validate"
              | "value"
              | "shouldUnregister"
              | "onChange"
              | "onBlur"
              | "deps"
              | "pattern",
              string
          >
        | undefined
        | any
) => {
    let error = ""

    switch (type) {
        case "required":
            error = `${inputName} is Required`
            break
        case "minLength":
            error = `${inputName} is Too Short`
            break
        case "maxLength":
            error = `${inputName} is Too Long`
            break
        case "mismatch":
            error = `Password Doesn't Match`
            break

        default:
            error = "Invalid Input"
    }

    return error
}

export default errorMsg
