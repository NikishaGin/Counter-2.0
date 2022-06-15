import React, {useState} from "react";
import {Button} from "@mui/material";

export let ButtonsReset = () => {
    let [a, setA] = useState(0)
    if (a != 5) {
        return (
            <div>
                <h1>{a}</h1>
                <Button variant="contained" color="success" onClick={()=>setA(++a)}>inc</Button>
                <Button variant="outlined" color="error" disabled={true}>reset</Button>
            </div>
        )
    } else {
        return (
            <div>
                <h1>{a}</h1>
                <Button variant="contained" color="success">inc</Button>
                <Button variant="outlined" color="error" onClick={()=>setA(0)}>reset</Button>
            </div>
        )
    }
}
