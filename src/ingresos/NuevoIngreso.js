import React, { useState } from 'react'
import { TextField, Button, Typography, Paper, Select, MenuItem } from '@material-ui/core';
import Axios from 'axios';
import { monedasUrl, responsablesUrl , ingresosUrl } from '../config/urls';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';


function NuevaIngreso() {
    const [fecha, setFecha] = useState(new Date());
    const [monto, setMonto] = useState("");
    const [detalle, setDetalle] = useState("");
    const [moneda, setMoneda] = useState("");
    const [responsable, setResponsable] = useState("");
    const [responsables, setResponsables] = useState([]);
    const [monedas, setMonedas] = useState([]);

    const getResponsables = () => {
        Axios.get(responsablesUrl)
                .then(res => {
                    setResponsables(res.data)
                })
                .catch(err => console.log(err))

    }
    const getMonedas = () => {
        Axios.get(monedasUrl)
                .then(res => {
                    setMonedas(res.data)
                })
                .catch(err => console.log(err))

    }

    const confirm = () => {
        Axios.post(ingresosUrl , {fecha, monto, detalle, moneda, responsable})
                .then(res => console.log(res))
                .catch(err => console.log(err))
        setFecha("");
        setMonto("");
        setDetalle("");
        setMoneda("");
        setResponsable("");
    }
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <Paper elevation={3} style={{width:'30%', display:'grid', padding:50}}>

                <Typography style={{paddingBottom:8, marginLeft:-8}} variant='h6'> NUEVO INGREO </Typography>
        
                <TextField style={{margin:8}} label="Monto" value={monto} onChange={event => setMonto(event.target.value)} />
                <TextField style={{margin:8}} label="Detalle" value={detalle} onChange={event => setDetalle(event.target.value)} />

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker disableToolbar
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        label="Fecha"
                                        value={fecha}
                                        onChange={event => setFecha(event.target.value)}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                </MuiPickersUtilsProvider>

                <Select value={responsable}
                        label="Responsable"
                        onOpen={getResponsables}
                        onChange={ event => setResponsable(event.target.value) }
                        >
                    {
                        responsables.map(item => (
                            <MenuItem value={item.id} key={item.id}> {item.nombre} </MenuItem>
                        ))

                    }
                </Select>

                <Select value={moneda}
                        label="Monedas"
                        onOpen={getMonedas}
                        onChange={ event => setMoneda(event.target.value) }
                        >
                    {
                        monedas.map(item => (
                            <MenuItem value={item.id} key={item.id}> {item.nombre} </MenuItem>
                        ))

                    }
                </Select>
                <Button style={{margin:8}} color='primary' variant='contained' onClick={confirm} disabled={!monto}> Confirmar </Button>
                
            </Paper>
        </div>
    )
}

export default NuevaIngreso

