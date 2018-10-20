import {store} from 'react-easy-state';

const rfidSearch = store({
  searchPassword: '',
  result: [],
});

const vehicleSearch = store({
  searchPassword: '',
});

export {
  rfidSearch,
  vehicleSearch
};
