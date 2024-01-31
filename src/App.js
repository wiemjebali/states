import './App.css';
import React, { Component } from 'react'
import Conteur from './Conteur.js';
export default class App extends Component {
  constructor(){
    super();
    this.state={
      show:true
    }
  }
hndl=()=>{
  this.setState({show: !this.state.show})
}
  render() {
    return (
      <div className='body'>
        <button onClick={()=>this.hndl()}>show</button>
        {this.state.show   &&     <Conteur/>}
        
      </div>
    )
  }
}


