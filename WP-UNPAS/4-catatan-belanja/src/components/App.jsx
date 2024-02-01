import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

const groceryItems = [
	{
		id: 1,
		name: 'Kopi Bubuk',
		quantity: 2,
		checked: true,
	},
	{
		id: 2,
		name: 'Gula Pasir',
		quantity: 5,
		checked: false,
	},
	{
		id: 3,
		name: 'Air Mineral',
		quantity: 3,
		checked: false,
	},
	{
		id: 4,
		name: 'Gyunyu',
		quantity: 4,
		checked: false,
	},
];

export default function App() {
	const [items, setItems] = useState(groceryItems);

	function handleAddItem(item) {
		setItems([...items, item]);
	}

	function handleDeletItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	function handleToggleItem(id) {
		setItems((items) => items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item));
	}

	function handleClearItems() {
		setItems([]);
	}

	return (
		<div className="app">
			<Header />
			<Form onAddItem={handleAddItem} />
			<GroceryList items={items} onDeleteItem={handleDeletItem} onToggleItem={handleToggleItem} onClearItems={ handleClearItems } />
			<Footer items={items} />
		
	</div>
	);
}