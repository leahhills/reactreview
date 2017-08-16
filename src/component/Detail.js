import React, {Component}from 'react'
class Detail extends Component{

render(){
    return(
        <div>
          <img src={this.props.productImage}/>
          <p>
              ${this.props.productPrice}.00
          </p>
        
        </div>
    )
}
}
export default Detail;
