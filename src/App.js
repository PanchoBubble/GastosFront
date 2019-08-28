import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
// import ResumenDeGastos from "./gastos/resumenDeGastos/Resumen";
// import HistorialGastos from './gastos/historial/HistorialGastos';
import NuevoTipo from './tipos/NuevoTipo';
import NuevaMoneda from './monedas/NuevaMoneda';
import NuevoResponsable from './reponsables/NuevoResponsable';
import NuevoIngreso from './ingresos/NuevoIngreso';

const styles = () => ({
  root: {
    background: '#2F4858',
    border: 0,
    color: 'white',
    marginBottom: 50,
  },
  paper:{
    padding: 10,
    width: 300,
    height: 150,
  },
  tittleDesc: {
    paddingTop: 10,
    paddingLeft: 10,
  },

});

class App extends React.Component{
  render(){
    const { classes } = this.props;
    return (
    <div >
      <AppBar position="static" color="default" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Gastos
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <ResumenDeGastos class={classes}  /> */}
      {/* <HistorialGastos /> */}
      <NuevoTipo />
      <NuevaMoneda />
      <NuevoResponsable />
      <NuevoIngreso />
    </div>
    )
  }
;
}

export default withStyles(styles)(App);
