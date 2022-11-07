//import debug from '../debug'

export const cfgMode = process.env.NODE_ENV === 'development'
  ?'DEV'
  :''

export const cfgPath = process.env.NODE_ENV === 'development'
  ?'http://127.0.0.1/api/nanofido/join'
  :'https://api.ignifer-labs.com/nanofido/join'

export const cfgPathSim = process.env.NODE_ENV === 'development'
  ?'http://127.0.0.1/api/nanofido/sim'
  :'https://api.ignifer-labs.com/nanofido/sim'

export const cfgSimWWW = process.env.NODE_ENV === 'development'
  ?'http://127.0.0.1:3001'
  :'https://nanofido.com/sim'

export const MenuConfig = {
  topMenu: [{
    title: 'New Workshop EN',
    subtitle: 'New Sparta',
    action: 'ADD_WORKSHOP',
    lang:'EN',
    params: { title: 'Simulation Workshop', subtitle:'Sparta 500BC', look: 'lookWorkshop' }
  },
  {
    title: 'Nowy Warsztat PL',
    subtitle: 'Nowa Sparta',
    action: 'ADD_WORKSHOP',
    lang:'PL',
    params: { title: 'Simulation Workshop', subtitle:'Sparta 500BC', look: 'lookWorkshop' }
  }],
  workshopMenu:{
  EN:[
    { title: 'Rules (EN)',
      subtitle: 'Sparta 500BC - Rules',
      action: 'ADD_DOCUMENT',
      params: { doc:'rules_sparta_en', look: 'lookDocument' }
    },
    { title: 'New Sparta',
      subtitle: 'Start New Sparta Sim',
      action: 'ADD_SIM',
      params: { look: 'lookSimulation' }
    },
    { title: 'PAUSE',
      subtitle: 'Pause on/off for Sparta Sim',
      action: 'PAUSE_SIM',
      params: { look: 'lookDocument' }
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
  ],
  PL:[
    { title: 'Zasady (PL)',
      subtitle: 'Sparta 500BC - Zasady',
      action: 'ADD_DOCUMENT',
      params: { doc:'rules_sparta_pl', look: 'lookDocument' }
    },
    { title: 'Nowa Sparta',
      subtitle: 'Uruchom symulację',
      action: 'ADD_SIM',
      params: { look: 'lookSimulation' }
    },
    { title: 'PAUZA',
      subtitle: 'Zatrzymanie/Wznowienie Symulacji',
      action: 'PAUSE_SIM',
      params: { look: 'lookDocument' }
    },
    { title: 'COFNIJ',
      subtitle: 'Usuń ostatni element',
      action: 'DELETE_LAST_BRICK',
      params: { show: 'onNonEmpty', look: 'lookMenuClear' }
    },
    { title: 'USUŃ',
      subtitle: 'Usuń ten warsztat',
      action: 'DELETE_WORKSHOP',
      params: { show: 'onEmpty', look: 'lookMenuClear' }
    }
  ]}
}

const theme = {
    mainColorBg: '#4d4d4d',
    mainColor: '#ffffff',
    secondaryColorBg: '#a70000',
    secondaryColor: '#ffffff'
}
export const cssStyles = {
  logo: { navBar: 'images/logo.png',
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
