import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import RoomFilter from '../filters/roomFilter';
import CostFilter from '../filters/costFilter';

const url = "https://developerfunnel.herokuapp.com/hotellist";

class Listing extends Component{
    constructor(){
        super()

        this.state={
            hoteldata:''
        }
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-2">
                   <RoomFilter/>
                   <CostFilter/>
                </div>
                <div className="col-md-10">
                  <ListingDisplay hotellist={this.state.hoteldata}/>
                </div>
            </div>
        )
    }

    componentDidMount(){
        var tripid = this.props.match.params.id;
        axios.get(`${url}/${tripid}`)
        .then((response) => {this.setState({hoteldata:response.data})})
    }
}

export default Listing;