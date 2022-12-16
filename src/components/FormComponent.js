import React, { useState } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';
import './FormComponent.css';

const FormComponent = ({ addProduct }) => {
	const initialState = {
		producto: '',
		precio: '',
		descripcion: '',
	};

	const [values, setValues] = useState(initialState);

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		// console.log(name, value);
		// Copiamos los valores actuales, y el input [name] que estemos actualizando, le colocamos el valor actual que estemos tipeando
		setValues({ ...values, [name]: value });
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		addProduct(values); // Envia al componente Products los valores de los values
		setValues({ ...initialState }); // Resetear campos de formulario
	};

	return (
		<div className='form-container'>
			<Form onSubmit={handleOnSubmit}>
				<Form.Field>
					<input
						placeholder='Producto'
						onChange={handleOnChange}
						name='producto'
						value={values.producto}
					/>
				</Form.Field>
				<Form.Field>
					<input
						placeholder='Precio'
						onChange={handleOnChange}
						name='precio'
						value={values.precio}
					/>
				</Form.Field>
				<Form.Field>
					<TextArea
						placeholder='Descripcion'
						onChange={handleOnChange}
						name='descripcion'
						value={values.descripcion}
					/>
				</Form.Field>
				<Button type='submit' primary fluid>
					Guardar
				</Button>
			</Form>
		</div>
	);
};

export default FormComponent;
