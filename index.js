import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import store from "@src/redux/store";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js';
import '@src/assets/style.scss';
import App from '@src/app/main';

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('main')
);
