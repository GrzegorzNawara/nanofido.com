import { cfgPath } from '../config/AppConfig'
//import debug from '../debug'

const lastMod = ( lastMod, setResult ) => {
  if(lastMod!==undefined)
    fetch(cfgPath+'/lastMod.php',{
      method: 'post',
      body: JSON.stringify({ lastMod: lastMod })
    }).then(result => result.json())
      .then(result => setResult(result));
}

export default lastMod
