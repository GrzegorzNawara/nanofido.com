import { cfgPath } from '../config/AppConfig'
//import debug from '../debug'

const saveBrick = (data) => {
  fetch(cfgPath+'/saveBrick.php',{
    method: 'post',
    body: JSON.stringify(data)
  }).then(result => result.json())
    .then(result => result);
}

export default saveBrick
