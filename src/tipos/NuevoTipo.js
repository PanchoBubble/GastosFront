import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import Axios from 'axios';
import { tiposUrl } from '../config/urls';

function NuevoTipo() {
    const [nombre, setNombre] = useState("")
    const [customAttr, setCustom] = useState("")
    const confirm = () => {
        Axios.post(tiposUrl, {nombre, customAttr})
                .then(res => console.log(res))
                .catch(err => console.log(err))
        setNombre("");
        setCustom("");
    }
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <Paper elevation={3} style={{width:'30%', display:'grid', padding:50}}>

                <Typography style={{paddingBottom:8, marginLeft:-8}} variant='h6'> NUEVO TIPO </Typography>
        
                <TextField style={{margin:8}} label="Nombre" value={nombre} onChange={event => setNombre(event.target.value)} />
                <TextField style={{margin:8}} label="Custom attribute" value={customAttr}  onChange={event => setCustom(event.target.value)} />

                <Button style={{margin:8}} color='primary' variant='contained' onClick={confirm} disabled={nombre.length < 3}> Confirmar </Button>
                
            </Paper>
        </div>
    )
}

export default NuevoTipo

