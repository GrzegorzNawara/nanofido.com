import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import MiniNavBar from './components/MiniNavBar'
import LicenceCheck from './LicenceCheck'
import Brick from './components/Brick'

//import debug from './debug'

const appName = 'nanofido.fido'
const initialState = {
  version:'1.0.1',
  mg: '',
  people: [
    {name:'Puchatek', id:'1351353452345'},
    {name:'Krzyś', id:'1351353452345'},
    {name:'Kłapouchy', id:'1351353452345'},
    {name:'Królik', id:'1351353452345'}
  ],
  categories: []
}


class App extends React.Component {

constructor(props) {
  super(props)

  this.state=initialState
  if(localStorage.getItem(appName)!==null)
    this.state=JSON.parse(localStorage.getItem(appName))

  if(this.state.version!==initialState.version)
    this.state=initialState

  this.state.pinChanged=0
}

componentWillUnmount() {
  localStorage.setItem(appName,JSON.stringify(this.state))
}

render () { return (
  <div className="App">
    <HashRouter>
      <div>
        {(this.state.mg)?null:
          <LicenceCheck setMG={mg => {
            if (this.state.mg!==mg)
              this.setState({...this.state, mg})}} />
        }

        <Switch>            
          <Route exact path="/licence/:licence" render={({match})=> {
            localStorage.setItem("licence", match.params.licence)
            return <Redirect to="/" />
          }} />
        </Switch>

        
        <MiniNavBar
          mg={this.state.mg}
          link='/' />

        <div>
          <div className="container py-2">
            
            {(this.state.people)?this.state.people.map((p,i) =>
              <div className="row justify-content-center">
                <Brick key={'brick1'} title={" "+(i+1)+". "+p.name} subtitle={p.id}
                  look="lookDefault" />
              </div>
            ):null}
            
          </div>
      </div>
        

      </div>
    </HashRouter>
  </div>
)}}

export default App
