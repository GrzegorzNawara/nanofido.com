import { cfgPath } from '../config/AppConfig'
//import debug from '../debug'

const deleteBrick = (brick) => {
    fetch(cfgPath+'/deleteBrick.php',{
      method: 'post',
      body: JSON.stringify({owner: brick.owner, workshopId: brick.super, brickId:brick.id})
    }).then(result => result.json())
      .then(result => result);
}

export default deleteBrick
