import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import Axios from 'axios';
import { monedasUrl } from '../config/urls';

function NuevaMoneda() {
    const [nombre, setNombre] = useState("")
    const [codigo, setCodigo] = useState("")
    const confirm = () => {
        Axios.post(monedasUrl , {nombre, codigo})
                .then(res => console.log(res))
                .catch(err => console.log(err))
        setNombre("");
        setCodigo("");
    }
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <Paper elevation={3} style={{width:'30%', display:'grid', padding:50}}>

                <Typography style={{paddingBottom:8, marginLeft:-8}} variant='h6'> NUEVA MONEDA </Typography>
        
                <TextField style={{margin:8}} label="Nombre" value={nombre} onChange={event => setNombre(event.target.value)} />
                <TextField style={{margin:8}} label="Codigo" value={codigo} onChange={event => setCodigo(event.target.value)} />

                <Button style={{margin:8}} color='primary' variant='contained' onClick={confirm} disabled={nombre.length < 3}> Confirmar </Button>
                
            </Paper>
        </div>
    )
}

export default NuevaMoneda

