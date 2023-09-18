import ReactDOM from 'react-dom/client';

import { BrowserRouter  } from 'react-router-dom';


import Landing from './Landing';
import axios from 'axios';

axios.defaults.baseURL = 'http://firstdeployment-test.ap-south-1.elasticbeanstalk.com/api/'
axios.defaults.headers.common['Authorization']= 'Bearer '+ localStorage.getItem('jwtToken');

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<BrowserRouter>
         <Landing></Landing>
</BrowserRouter>);
