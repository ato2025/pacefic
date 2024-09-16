import { FC, memo, useLayoutEffect, useRef } from 'react'
import usePrevious from '../../Hooks/usePrevious/usePrevious'
import { SingleOTPInputProps } from './SingleOtpInput.type'

const SingleOTPInputComponent: FC<SingleOTPInputProps> = ({ focus, autoFocus, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const prevFocus = usePrevious(!!focus)

  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus()
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus()
        inputRef.current.select()
      }
    }
  }, [autoFocus, focus, prevFocus])

  return <input ref={inputRef} {...props} />
}

const SingleOTPInput = memo(SingleOTPInputComponent)
export default SingleOTPInput
