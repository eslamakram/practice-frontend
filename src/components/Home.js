import React, { Component } from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FruitCard from './FruitCard';


export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fruitsData : [],
            favFruit : []
        }
    }

    componentDidMount = () => {
        let url = 'https://test-entrance401.herokuapp.com/fruits';
        axios.get(url).then(res => {
            this.setState({
                fruitsData: res.data
            })
        })

    }


    addtoFav=(name, img, price)=>{
        let url= 'https://test-entrance401.herokuapp.com/addtoFav'
        const {user} = this.props.auth0;
        const email = user.email;

        const obj={
            name: name,
            image:img,
            price:price,
            email:email
        };

        axios.post(url,obj).then(result =>{
            this.setState({
                favFruit: result.data})
                console.log(this.state.favFruit);
        }).catch(error =>{
            console.log('something went error');
            alert(error.message);
        })



    }

    render() {
        return (
            <div>


                {this.state.fruitsData.length ?
                    <FruitCard fruitsData={this.state.fruitsData} addtoFav={this.addtoFav} />
                    :
                    <h4>No fruits Found </h4>}

            </div>
        )
    }
}

export default withAuth0(Home);
