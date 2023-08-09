import React, {ChangeEvent} from "react";
import {Checkbox} from "@mui/material";

type CheckboxPropsType = {
    checked:boolean
    callback:(newIsDoneValue: boolean)=> void
    color: string

}

export const SuperCheckbox = (props:CheckboxPropsType ) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(e.currentTarget.checked)
    }
    return  (
        <Checkbox
        checked={props.checked}
        color="primary"
        onChange={onChangeHandler}
    />
    )
}
