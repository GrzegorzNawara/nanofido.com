import { cfgPath } from '../config/AppConfig'
//import debug from '../debug'

const saveWorkshop = (data) => {
  fetch(cfgPath+'/saveWorkshop.php',{
    method: 'post',
    body: JSON.stringify(data)
  }).then(result => result.json())
    .then(result => result);
}

export default saveWorkshop
