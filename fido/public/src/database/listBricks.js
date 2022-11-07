import { cfgPath } from '../config/AppConfig' 
//import debug from '../debug'


const listBricks = ( owner, workshopId, setResult ) => {
  if(owner!==undefined)
    fetch(cfgPath+'/listBricks.php',{
      method: 'post',
      body: JSON.stringify({owner: owner, workshopId: workshopId})
    }).then(result => result.json())
      .then(result => setResult(result))
}

export default listBricks
