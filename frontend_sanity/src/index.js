import React from 'react';
import  ReactDOM from 'react-dom';  //help us connect with our html file

import App from './App';     //app component we'll having in future
import './index.css';

ReactDOM.render(<App/>, document.getElementById('root'));      //in body of index.html we will be having react application as 'root' id inside div.We connected our app with uding id to div

