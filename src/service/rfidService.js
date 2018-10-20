import axios from 'axios';
import {rfidSearch} from '../stores/Search';

const linkToGetByRFID = 'https://bial-hack-api.azurewebsites.net/api/trashtransport/getbyrfid?rfid=';

function getByRFID(tag) {
  console.log(tag);
  axios.get(linkToGetByRFID + tag)
    .then((response) => {
      console.log(response);
      rfidSearch.result = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export {
  getByRFID,
};
