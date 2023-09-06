import React, { Component } from 'react'
import wetherServer from '../wetherServer';
export default class First extends Component {
    statr = {
        data: null,
    };
    fetchWether = ()=>{
     wetherServer().then((data)=>
     {
       this.setState({
        data,
       })
     });
    };
    componentDidMount = ()=>this.fetchWether();
  render() {
    return this.state.data ? (
      <div>
        <h1 id = "city">{this.state.data.city}</h1>
        <div id = "condition">{this.state.data.conditions}</div>
        <div id = "current-temp">{this.state.data.current}</div>
      </div>
    ):(
        <div>No Data Available</div>
    )
  }
}

