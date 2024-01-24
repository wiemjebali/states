import React, { Component } from 'react'

export default class Conteur extends Component {
    constructor(){
        super();
        this.state={
            contr0:100,
            contr1:200
        }
       
    
    }
    pluss=()=>{
        this.setState({
            contr0 : this.state.contr0 +1
        }
        )
    }









moinn=()=>{
    this.setState({
        contr1 : this.state.contr1 -1
    }
    )
 
}

reset=()=>{
    this.setState({
contr0 : this.state.contr0 =0

    }
    )
}

componentDidMount(){
    console.log('ena cbn te9rit')
    console.log(this.state.contr0)
}


componentDidUpdate(){

    console.log('saretli update')
    console.log(this.state.contr0)
}


componentWillUnmount(){

    console.log('fass5ouni')
    console.log(this.state.contr1)
}




  render() { 
    return (
      <div>
        {this.state.contr0}
        <button onClick={()=>this.pluss()}>augmnt</button>
        {this.state.contr1}
        <button onClick={()=>this.moinn()} >moinnnn</button>
       
        <button onClick={()=>this.reset()} >init</button>
      </div>
    )
  }
}
