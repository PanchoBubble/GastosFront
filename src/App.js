import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Grid, Paper, Divider } from '@material-ui/core';

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
;
}

export default withStyles(styles)(App);
