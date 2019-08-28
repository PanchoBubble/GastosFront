import React, {Component} from 'react';
import axios from 'axios';
import { gastosUrl } from '../../config/urls';

class HistorialGastos extends Component {
    state = {
        gastos : [],
    }
    componentDidMount(){
        axios.get(gastosUrl)
                .then(response => {
                    this.setState({gastos:response.data || []})
                })
                .catch(err => {
                    console.log(err)
                })

    }
    render(){
        return (
            <div>
            </div>
        )
    }
}

export default HistorialGastos
