import { cfgPath } from '../config/AppConfig'
//import debug from '../debug'

const listWorkshopsByOwner = ( owner, setResult ) => {
  if(owner!==undefined)
    fetch(cfgPath+'/listWorkshopsByOwner.php',{
      method: 'post',
      body: JSON.stringify({owner: owner})
    }).then(result => result.json())
      .then(result => setResult(result.filter((b) => b && b.id )));
}

export default listWorkshopsByOwner
