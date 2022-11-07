import { cfgPathSim } from '../config/AppConfig'
//import debug from '../debug'

const simReadState = (game_id, setResult) => {
    fetch(cfgPathSim+'/apiReadState.php'
            +'?game_id='+game_id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
        })
      .then(result => setResult({
        ...result
      }))
      .catch((error) => {
      })
}

export default simReadState
