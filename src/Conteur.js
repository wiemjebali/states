import React, { Component } from 'react'

export default class Conteur extends Component {
    constructor(){
        super();
        
      }
  render() {
    return (
      <div>
      <div class="card-container phoenix-card">
  <img class="avatar" src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0200e1821b5b39f/5eb7cdc144bf8261a04d87f9/V_AGENTS_587x900_Phx.png"></img>
  <div class="card phoenix"></div>
</div>

<div class="card-container jett-card">
  <img class="avatar" src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png"></img>
  <div class="card jett"></div>
</div>
      </div>
    )
  }
}
