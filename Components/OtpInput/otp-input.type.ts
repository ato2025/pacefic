import { CSSProperties } from "react"

export interface OTPInputProps {
  length: number
  onChangeOTP: (otp: string) => string | number | void

  autoFocus?: boolean
  isNumberInput?: boolean
  disabled?: boolean

  style?: CSSProperties
  className?: string

  inputStyle?: CSSProperties
  inputClassName?: string
}