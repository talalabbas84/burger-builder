 import axios from 'axios';

 const instance = axios.create({
     baseURL: 'https://my-burger-64f3a.firebaseio.com/'
 }); 

 
 export default instance;