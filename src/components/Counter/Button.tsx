import React, {FC} from "react";

type ButtonType = {
    title: string
    callback: () => void
    disabled?: boolean
    className?: string

}
export const Button: FC<ButtonType> = React.memo(({title, callback, disabled, className}) => {

    console.log("Button")

    const onClickHandler = () => {
        callback()
    }

    return (
        <button onClick={onClickHandler} disabled={disabled} className={className}>{title}</button>
    )
})