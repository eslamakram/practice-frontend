import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import FavCard from './FavCard';
import UpadteFruit from './UpadteFruit';


 class FavFruit extends Component {
  
    constructor(props){
        super(props);
        this.state={
            FavData:[],
            name:'',
            image:'',
            price:'',
            id:'',
            showUpdateModal:false,
            selectedFruitUpdate:{}

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

    deleteFav=(id)=>{
        const {user}= this.props.auth0;
        const email = user.email;
        let url=`https://test-entrance401.herokuapp.com/deleteFav/${id}?email=${email}`
        axios.delete(url).then( result =>{
            this.setState({
                FavData:result.data
            })
        }).catch(error =>{
            alert(error.massage)
        })
    }

    handelDisplayUpdateModal=(fruitObj)=>{
        this.setState({
            showUpdateModal: !this.state.showUpdateModal,
            selectedFruitUpdate: fruitObj
        });
    }

    handelUpdateModal=(event)=>{
        
        // event.preventDefault();
        const {user}=this.props.auth0;
        const email=user.email;
        const reqBody={
         name: event.target.fruitName.value,
         image: event.target.fruitImage.value,
         price: event.target.fruitPrice.value,
         email:email
        }

        let url=`https://test-entrance401.herokuapp.com/updateFav/${this.state.selectedFruitUpdate._id}`;
        axios.put(url,reqBody).then(result =>{
              this.setState({
                FavData:result.data,
                selectedFruitUpdate: {},
                showUpdateModal: !this.state.showUpdateModal

            });
                   }).catch(error =>{
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <h1>My favoirate  Fruits</h1>
                <FavCard FavData={this.state.FavData} 
                         deleteFav={this.deleteFav}
                         handelDisplayUpdateModal={this.handelDisplayUpdateModal}
                         handelUpdateModal={this.handelUpdateModal}/>

            { this.state.showUpdateModal && 
                <UpadteFruit show={this.state.showUpdateModal}
                             handelDisplayUpdateModal ={this.handelDisplayUpdateModal} 
                             selectedFruitUpdate={this.state.selectedFruitUpdate}
                             handelUpdateModal={this.handelUpdateModal}/>
            }
               
                
            </div>
        )
    }
}

export default withAuth0(FavFruit);
