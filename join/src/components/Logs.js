import React from 'react'
import formatTime from './formatTime'
import LogLine from './components/LogLine'
import debug from './debug'

class Logs extends React.Component {
  state = {
    rawLog:''
  }
  userIdDatabase=''

  componentWillMount(){
    this.readMsg(this.props.workshopId,(result) => {
      this.setState({rawLog:result})
    })
  }

  componentWillUnmount() {
    //clearInterval(this.getRavenStatsTimer);
  }

  componentDidUpdate(prevProps) {
  }

  userShortId = (userLongId) => {
      if(this.userIdDatabase.search(userLongId)===-1)
        this.userIdDatabase=this.userIdDatabase+(userLongId+'0'.repeat(36)).substring(0,36)
      return('P'+(this.userIdDatabase.search(userLongId)/36+1))
  }

  readMsg = (game, setResult) => {
      fetch('https://api.ignifer-labs.com/mir-sim/readMsg.php',{
        method: 'post',
        body: JSON.stringify({game: game})
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }})
        .then(result => setResult(result));
  }

  render() {
    let sprint=1
    let actTime='0:00'
    let u='unknown'
    let taskDatabase=''

    return (
      <div className="container">
        <h2 className="pt-4">LOGS</h2>
          <LogLine
            key='title'
            time='Time'
            sprint='Mission'
            text='Action' />

          {this.state.rawLog.split("\n").map((d,i)=>{
            let l=(d!=='')?JSON.parse(d):{}
            let text=''
            let actTime="0:00"
            actTime=(l.t>-1)?formatTime(l.t):(l.path)?formatTime(l.path[0].t):actTime

            if(l.a==='ATT') { text='' } else
            if(l.a==='WRK') { text='' } else
            if(l.a==='TSK') {
              if(taskDatabase.search(l.tsk.id)===-1)
                text=' New task '+l.tsk.id
                  +' opened by '+l.tsk.team
                  +' '+this.userShortId(l.u)
                  +' rooms '+l.tsk.rooms
              else
                text=' Task already open! Duplicated task '+l.tsk.id
                  +' tried by '+l.tsk.team
                  +' '+this.userShortId(l.u)

              taskDatabase+='T'+l.tsk.id+'K'
            }
            else if(l.a==='AGO') {
              text=' Astronaut '+l.n
              if(l.n===1) text=' Astronaut WHITE'
              if(l.n===2) text=' Astronaut RED'
              if(l.n===3) text=' Astronaut GREEN'

              text=text+' called by '+this.userShortId(l.u)
            }
            else if(l.a==='ALR') text='Alert in '+l.r
            else if(l.a==='TEM')
                text=this.userShortId(l.u)+' joined '+l.t
            else if(l.a==='STR') {
              sprint++
              actTime='0:00'
              text='---------- Mission started ----------'
            }
            else if(l.a==='END')
              text='Mission ended'

            return (text.length===0)?null:
              <LogLine
                key={i}
                time={actTime}
                sprint={'Mission '+sprint}
                text={text} />
          })}

      </div>
    )
  }
}

export default Logs
