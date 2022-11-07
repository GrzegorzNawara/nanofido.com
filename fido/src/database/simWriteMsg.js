import { cfgPathSim } from '../config/AppConfig'
//import debug from '../debug'

const simWriteMsg = (data) => {
  fetch(cfgPathSim+'/apiWriteMsg.php',{
    method: 'post',
    body: '123'+JSON.stringify(data)+'321'
  }).then(result => result.json());
}

export default simWriteMsg
