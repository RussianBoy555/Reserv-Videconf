//import { DatePicker, DateTimePicker, TimePicker } from "@material-ui/pickers";
import { useState } from 'react';

const App = () => {
	const [fechaSelect, /*cambFechaSelect*/] = useState(new Date())

	console.log(fechaSelect)

	return (
		<div className="contenedor">
			<div className="grupo">
				<label>Fecha</label>
				{/*<DatePicker value={fechaSelect} onChange={cambFechaSelect}/>*/}
			</div>
			<div className="grupo">
				<label>Hora</label>
				{/*<TimePicker value={fechaSelect} onChange={cambFechaSelect}/>*/}
			</div>
			<div className="grupo">
				<label>Hora y Fecha</label>
				{/*<DateTimePicker value={fechaSelect} onChange={cambFechaSelect}/>*/}
			</div>
		</div>
	);
}

export default App;