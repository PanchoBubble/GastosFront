import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import Axios from 'axios';
import { responsablesUrl } from '../config/urls';

function NuevoResponsable() {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const confirm = () => {
        Axios.post(responsablesUrl , {nombre, apellido, email})
                .then(res => console.log(res))
                .catch(err => console.log(err))
        setNombre("");
        setApellido("");
        setEmail("");
    }
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <Paper elevation={3} style={{width:'30%', display:'grid', padding:50}}>

                <Typography style={{paddingBottom:8, marginLeft:-8}} variant='h6'> NUEVO RESPONSABLE </Typography>
        
                <TextField style={{margin:8}} label="Nombre" value={nombre} onChange={event => setNombre(event.target.value)} />
                <TextField style={{margin:8}} label="Apellido" value={apellido} onChange={event => setApellido(event.target.value)} />
                <TextField style={{margin:8}} label="Email" value={email} onChange={event => setEmail(event.target.value)} />

                <Button style={{margin:8}} color='primary' variant='contained' onClick={confirm} disabled={nombre.length < 3}> Confirmar </Button>
                
            </Paper>
        </div>
    )
}

export default NuevoResponsable

