import React, {useState} from 'react';
import './App.css';
import {ButtonsReset} from "./ButtonReset";
import {Container, Grid, Paper} from "@mui/material";



function App() {

    return (
        <div className="App">
            <Grid container style={{padding:"20px"}}>
            <Container fixed color={'blue'}>
                <Grid item color={"black"}>
                    <Paper style={{padding: "10px"}}>
                    <ButtonsReset/>
                    </Paper>
                </Grid>
            </Container>
            </Grid>
        </div>
    )
        ;
}

export default App;
