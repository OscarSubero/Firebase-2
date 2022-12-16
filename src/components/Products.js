import React, { useState, useEffect } from 'react';
import FormComponent from './FormComponent';

import { db } from '../firebase';

// Styles
const styles = {
	cardStyles: {
		backgroundColor: 'green',
		padding: 20,
		margin: 10,
		borderRadius: 8,
		boder: '1px solid black',
	},
};

const Products = () => {
	const [products, setProducts] = useState([]);

	// console.log('Mi Estado', products);

	const addProduct = async (object) => {
		// console.log('Product', object);
		await db.collection('productos').doc().set(object);
		console.log('Producto agregado!');
	};

	const getProducts = () => {
		db.collection('productos').onSnapshot((querySnapshot) => {
			const docs = [];
			querySnapshot.forEach((doc) => {
				// console.log(doc.data());
				// console.log(doc.id);
				docs.push({ ...doc.data(), id: doc.id });
			});
			setProducts(docs);
		});
	};

	// Al poner el array vacio se va a ejecutar la primera vez que cargue el componente
	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div>
			<h1>Products</h1>
			<FormComponent addProduct={addProduct} />
			{products.map((item) => (
				<div key={item.id} style={styles.cardStyles}>
					<h1>{item.producto}</h1>
					<p>Precio: {item.precio}</p>
					<p>Descripcion: {item.descripcion}</p>
				</div>
			))}
		</div>
	);
};

export default Products;
