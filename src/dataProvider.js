import fakeDataProvider from 'ra-data-fakerest'; 
  
import data from './data'; 

const disableFakeFetchRequestsLogs = true;

export default fakeDataProvider(data, disableFakeFetchRequestsLogs);
 