//import debug from '../debug'

export const cfgMode = process.env.NODE_ENV === 'development'
  ?'DEV'
  :''

export const cfgPath = process.env.NODE_ENV === 'development'
  ?'http://127.0.0.1/api/nanofido/join'
  :'https://api.ignifer-labs.com/nanofido/join'

export const cfgPathSim = process.env.NODE_ENV === 'development'
  ?'http://127.0.0.1/api/nanofido/sim'
  :'https://api.ignifer-labs.com/nanofido/fido'

export const cfgSimWWW = process.env.NODE_ENV === 'development'
  ?'http://127.0.0.1:3001'
  :'https://nanofido.com/fido'

export const MenuConfig = {
  topMenu: [{
    title: 'New Workshop',
    subtitle: 'Create new workshop',
    action: 'ADD_WORKSHOP',
    lang:'EN',
    params: { title: 'Simulation Workshop', subtitle:'Nano feedback by nanofido.com', look: 'lookWorkshop' }
  }],
  workshopMenu:{
  EN:[
    { title: 'Rules (PL)',
      subtitle: 'Short intro to nano feedback',
      action: 'ADD_DOCUMENT',
      params: { doc:'rules_pl', look: 'lookDocument' }
    },
    { title: 'Name Tag',
      subtitle: 'Show name tags',
      action: 'ADD_NAMEBRICK',
      params: { look: 'lookDocument' }
    },
    { title: 'New Sparta',
      subtitle: 'Start New Sparta Sim',
      action: 'ADD_SIM',
      params: { look: 'lookSimulation' }
    },
    { title: 'UNDO',
      subtitle: 'Remove last item',
      action: 'DELETE_LAST_BRICK',
      params: { show: 'onNonEmpty', look: 'lookMenuClear' }
    },
    { title: 'DELETE',
      subtitle: 'Remove this workshop',
      action: 'DELETE_WORKSHOP',
      params: { show: 'onEmpty', look: 'lookMenuClear' }
    }
  ]}
}

const theme = {
    mainColorBg: '#44a4b9',
    mainColor: '#ffffff',
    secondaryColorBg: '#44a4b9',
    secondaryColor: '#ffffff'
}
export const cssStyles = {
  logo: { navBar: 'images/logo-color.png',
          white: 'images/logo-white.png'
        },

  lookSpinner: { backgroundColor:theme.secondaryColorBg, color:theme.secondaryColor },

  lookDefault: { backgroundColor:'#aaaaff', color:'#555555' },
  lookChat: { backgroundColor:'#555555', color:'#ffffff' },
  lookMenu: { backgroundColor:'#2c97cf', color:'#ffffff' },
  lookMenuClear: { backgroundColor:'#ff0000', color:'#ffffff' },

  lookScore: { backgroundColor:'#a70000', color:'#ffffff' },
  lookScoreRow: { backgroundColor:'#888888', color:'#ffffff' },
  lookScoreRowDone: { backgroundColor:'#008800', color:'#ffffff' },

  lookTeam: { backgroundColor:'#005500', color:"#ffffff" },

  lookGate: { backgroundColor:theme.secondaryColorBg, color:theme.secondaryColor },
  lookWorkshop: { backgroundColor:theme.mainColorBg, color:theme.mainColor },
  lookDocument: { backgroundColor:'#b4d8de', color:'#132e35' },

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

export const translationsPL={
  "Total":"Razem",
  "Enemies":"Pokonani wrogowie",
  "People, Fame, Civilisation":"Zaspokajanie miast",
  "Goods Gathered and Delivered":"Zbieranie zasobów",
  'Goods Gathered':'Wszystkie zebrane',
  'Goods Delivered':'Zebrane dla miast',
  'Factories':'Produkcja faktorii',
  'People Saved':'Dostarczone dobra',
  'Population':'Populacja',
  'SCORE':'PUNKTACJA',
  'Civilisation Influence':'Zaspokajanie miast',
  'YEAR':'ROK',
  'Civilisation Power':"Potęga cywilizacji",
  "Roman":"Imperium rzymskie",
  "Maya":"Majowie",
  "Egyptian":"Egipcjanie",
  "Mezopotamian":"Mezopotamia",
  "Persians":"Persja",
  "Spartans":"Spartanie",
  "THE END":"SYM. ZAKOŃCZONA",
  "PAUSED":"PAUZA",
  "RUNNING":"AKTYWNA"
}
