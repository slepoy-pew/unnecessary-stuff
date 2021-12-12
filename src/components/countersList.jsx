import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {

	const initialState = [
		{ id: 0, value: 0, name: "Ненужная вещь" },
		{ id: 1, value: 4, name: "Ложка" },
		{ id: 2, value: 0, name: "Вилка" },
		{ id: 3, value: 0, name: "Тарелка" },
		{ id: 4, value: 0, name: "Набор минималиста" },
	];

	const [counters, setCounters] = useState(initialState);

	const stylesForContainerBtn =
		`container-sm mt-2 p-1
		border border-primary
		d-flex justify-content-center 
		bg-success bg-gradient`

	const handleDelete = (id) => {
		const newCounters = counters.filter((count) => count.id !== id);
		setCounters(newCounters);
	};

	const handleIncrement = (id) => {
		setCounters(
			counters.map((count) => {
				if (count.id === id) count.value++
				return count;
			})
		);
	};

	const handleDecrement = (id) => {
		setCounters(
			counters.map((count) => {
				if (count.id === id) count.value--
				return count;
			})
		);
	};

	const handleReset = () => {
		setCounters(initialState);
	};

	return (
		<div className="mt-5">

			{counters.map((count) => (
				<Counter
					key={count.id}
					onDelete={handleDelete}
					onIncrement={handleIncrement}
					onDecrement={handleDecrement}
					{...count}
				/>
			))}

			<div className={stylesForContainerBtn}>
				<button
					className="btn bg-warning bg-gradient"
					onClick={handleReset}
				>
					СБРОС
				</button>
			</div>

		</div>
	);
}
export default CountersList;