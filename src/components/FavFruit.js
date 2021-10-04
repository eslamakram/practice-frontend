import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import FavCard from './FavCard';


 class FavFruit extends Component {
  
    constructor(props){
        super(props);
        this.state={
            FavData:[],
            name:'',
            image:'',
            price:'',
            id:''

        }
    }

    componentDidMount = ()=>{
        const{ user} = this.props.auth0;
        const email = user.email;
        let url = `https://test-entrance401.herokuapp.com/getFav?email=${email}`;
        axios.get(url).then( result =>{
            this.setState({
                FavData:result.data
            })
        }).catch(error =>{
            alert(error.massage)
        })
    }

    render() {
        return (
            <div>
                <h1>My favoirate  Fruits</h1>
                <FavCard favFruit={this.state.FavData} />
                
            </div>
        )
    }
}

export default withAuth0(FavFruit);
