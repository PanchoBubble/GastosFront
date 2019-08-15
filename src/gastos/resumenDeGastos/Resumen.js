import React from 'react'
import { Grid, Paper, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

function Resumen(props) {
    const {classes} = props;
    return (
        <div>
            <Grid container justify="space-around">
                <Paper className={classes.paper}>
                    <Typography variant="h6" color="inherit" >
                    Ingresos
                    </Typography>
                    <Divider/>
                    <Typography variant="subtitle2" color="inherit" className={classes.tittleDesc}>
                    Totales
                    </Typography>
                    <Typography variant="subtitle2" color="inherit" className={classes.tittleDesc}>
                    Juli
                    </Typography>
                    <Typography variant="subtitle2" color="inherit" className={classes.tittleDesc}>
                    Pancho
                    </Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant="h6" color="inherit">
                    Gastos
                    </Typography>
                    <Divider/>
                    <Typography variant="subtitle2" color="inherit" className={classes.tittleDesc}>
                    Totales
                    </Typography>
                    <Typography variant="subtitle2" color="inherit" className={classes.tittleDesc}>
                    Juli
                    </Typography>
                    <Typography variant="subtitle2" color="inherit" className={classes.tittleDesc}>
                    Pancho
                    </Typography>
                </Paper> 
                <Paper className={classes.paper}>
                    <Typography variant="h6" color="inherit">
                    Disponible
                    </Typography>
                    <Divider />
                    <Typography variant="subtitle2" color="inherit" className={classes.tittleDesc}>
                    Totales
                    </Typography>
                    <Typography variant="subtitle2" color="inherit" className={classes.tittleDesc}>
                    Juli
                    </Typography>
                    <Typography variant="subtitle2" color="inherit" className={classes.tittleDesc}>
                    Pancho
                    </Typography>
                </Paper>      
            </Grid>
            
        </div>
    )
}

export default Resumen

