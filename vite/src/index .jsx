import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './Index';
import {MuiPickerUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<React.StrictMode>
		<MuiPickerUtilsProvider utils={DateFnsUtils}>
		<App />
		</MuiPickerUtilsProvider>
	</React.StrictMode>,
);

