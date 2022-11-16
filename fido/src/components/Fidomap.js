import React from 'react'
import { Link } from 'react-router-dom';
import { cssStyles } from '../config/AppConfig'
import debug from '../debug'

class Fidomap extends React.Component {
  
  render() { 
    const state=this.props.state

    return (
    <div id="fidomap-div" 
      onScroll={(e)=> {
        this.props.setState({
          ...state,
          x:document.getElementById( "fidomap-div" ).scrollLeft,
          y:document.getElementById( "fidomap-div" ).scrollTop
        })
      }}
      className="fidomap-container">
      <img // CROSS
        className="fidoBox"
        style={{
          position:'fixed',
          left:state.cross.x+"px",
          top:state.cross.y+"px"
        }}
        src={"./images/b9.png"} />
      {state.opinions.map((p,i)=>
        <div style={{
          position:'absolute',
          textAlign:'center',
          color:'#000000',
          left:p.x+"px",
          top:p.y+"px"
        }}><img 
          onClick={(e)=> {
            let tmpOpinions=state.opinions.slice()
            tmpOpinions[i].value=(p.value+1)%4
            this.props.setState({
              ...state,
              opinions:tmpOpinions,
              x:document.getElementById( "fidomap-div" ).scrollLeft,
              y:document.getElementById( "fidomap-div" ).scrollTop
            })
          }}
          className="fidoBox" 
          src={"./images/b"+p.value+".png"} />{p.title}</div>
      )}
      <img id="fidomap" src="./images/map1.png" />
    </div>
  )}
}

export default Fidomap
