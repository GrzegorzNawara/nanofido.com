import { cfgPath } from '../config/AppConfig'
//import debug from '../debug'

const getWorkshopByPin = ( pin, setResult ) => {
  fetch(cfgPath+'/getWorkshopByPin.php',{
    method: 'post',
    body: JSON.stringify({PIN: pin})
  }).then(result => result.json())
    .then(result => setResult(result));
}

export default getWorkshopByPin
