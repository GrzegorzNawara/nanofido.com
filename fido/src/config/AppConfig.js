//import debug from '../debug'

export const cfgMode = process.env.NODE_ENV === 'development'
  ?'DEV'
  :''

export const cfgPath = process.env.NODE_ENV === 'development'
  ?'http://127.0.0.1/api/nanofido/fido'
  :'https://api.ignifer-labs.com/nanofido/fido'

export const cfgLicencePath = process.env.NODE_ENV === 'development'
  ?'http://127.0.0.1/api/nanofido/join'
  :'https://api.ignifer-labs.com/nanofido/join'


export const cfgSimWWW = process.env.NODE_ENV === 'development'
  ?'http://127.0.0.1:3001'
  :'https://nanofido.com/fido'

const theme = {
    mainColorBg: '#44a4b9',
    mainColor: '#000000',
    secondaryColorBg: '#44a4b9',
    secondaryColor: '#ffffff'
}
export const cssStyles = {
  logo: { navBar: 'images/logo.png',
          white: 'images/logo-white.png'
        },


  lookNavbar: { backgroundColor:theme.mainColorBg, color:theme.mainColor },

  lookDefault: { backgroundColor:'#b4d8de', color:'#1d4650' },
  lookChat: { backgroundColor:'#555555', color:'#ffffff' },
  lookMenu: { backgroundColor:'#2c97cf', color:'#ffffff' },
  lookMenuClear: { backgroundColor:'#ff0000', color:'#ffffff' },

  lookScore: { backgroundColor:'#a70000', color:'#ffffff' },
  lookScoreRow: { backgroundColor:'#888888', color:'#ffffff' },
  lookScoreRowDone: { backgroundColor:'#008800', color:'#ffffff' },

  lookTeam: { backgroundColor:'#005500', color:"#ffffff" },

  lookGate: { backgroundColor:theme.secondaryColorBg, color:theme.secondaryColor },
  lookWorkshop: { backgroundColor:theme.mainColorBg, color:theme.mainColor },
  lookDocument: { backgroundColor:'#dddddd', color:'#333333' },

  lookTeamActive: { backgroundColor:'#c70000', color:'#ffffff' },
  lookTeamInactive: { backgroundColor:'#888888', color:'#ffffff' },
  lookTeamOver: { backgroundColor:'#888888', color:'#ffffff' },

  lookSimulation: { backgroundColor:theme.secondaryColorBg, color:theme.secondaryColor },
  lookSimulationOver: { backgroundColor:'#555555', color:'#ffffff' },
  lookSimulationResults: { backgroundColor:'#eeeeee', color:'#666666' },
  lookSetup: { backgroundColor:'#e09b04', color:'#ffffff' },

  lookMCTest: { backgroundColor:'#ffd65c', color:'#000000' },
  lookMCScore: { fontSize:'1.5em' },
  lookMCScoreLabel: { fontSize:'0.7em' },

  rankingChecked: { color:'#666666' },
  rankingUnchecked: { color:'#cccccc' }
}

