import {TextField} from "@mui/material";

//you are allowed to change the code below to style the project

export default function GenerateForm({form}) {

    return form.map((elem) => {
        return (<TextField key={elem.id} defaultValue={form.value} label={elem.label} variant={"outlined"} fullWidth required={!!elem.isRequired}/>)
    })
}