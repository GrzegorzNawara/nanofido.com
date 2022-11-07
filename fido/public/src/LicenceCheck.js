import { cfgPath } from './config/AppConfig'
//import debug from './debug'

const LicenceCheck = ({setMG}) => {

  localStorage.removeItem('mg','');
  if(localStorage.getItem('licence'))
    fetch(cfgPath+'/licence.php?licence='+localStorage.getItem('licence'), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      if(response) localStorage.setItem('mg',response);
      setMG(response);
    });

  return null
}

export default LicenceCheck;
