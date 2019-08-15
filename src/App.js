import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import ResumenDeGastos from "./gastos/resumenDeGastos/Resumen";
import HistorialGastos from './gastos/historial/HistorialSetUp';

const styles = () => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
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
  getData = () =>{

    console.log(
      `Vamos ejecutamos el siguiente codigo:
        getData = () =>{
          const myHeaders = new Headers({
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36'
          });
          var config = { method: 'GET',
                        headers: misCabeceras,
                        mode: 'cors',
                        cache: 'default' };
          fetch('localhost:420/gastos',config).then(response => {
                                            console.log("Estamos en el primer then")
                                            console.log(response)
                                            return response.json()
                                          })
                                    .then(response2 => {
                                            console.log("Estamos en el segundo then")
                                            console.log(response2)
                                    })
                                    .catch(err => console.log(err))
          }
        }
      `
    )

    const myHeaders = new Headers({
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36'
    });

    var config = { method: 'GET', headers: myHeaders };

    fetch('http://localhost:420/gastos',config).then(response => {
                                      console.log("Estamos en el primer then")
                                      console.log(response)
                                      return response.json()
                                    })
                              .then(response2 => {
                                      console.log("Estamos en el segundo then")
                                      console.log(response2)
                              })
                              .catch(err => console.log(err))
  }
  
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
      <div style={{display:'flex', justifyContent: 'center'}}>
        <Button onClick={this.getData} variant='contained' size='large' color='primary' style={{margin:30}}>
          Get Data
        </Button>

      </div>
      <ResumenDeGastos classes={classes}  />
      <HistorialGastos />
    </div>
    )
  }
;
}

export default withStyles(styles)(App);
