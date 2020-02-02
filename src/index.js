import React from 'react';
import ReactDOM from 'react-dom';
import { Admin, Resource } from 'react-admin'; 

import dataProvider from './dataProvider';
import tags from './tags';

import './index.css';

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="employee_list" {...tags} />
    </Admin>
);
  
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
