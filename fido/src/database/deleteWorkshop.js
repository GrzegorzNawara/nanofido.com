import { cfgPath } from '../config/AppConfig'
//import debug from '../debug'

const deleteWorkshop = (workshop) => {
    fetch(cfgPath+'/deleteWorkshop.php',{
      method: 'post',
      body: JSON.stringify({owner: workshop.owner, workshopId: workshop.super})
    }).then(result => result.json())
      .then(result => result);
}

export default deleteWorkshop
