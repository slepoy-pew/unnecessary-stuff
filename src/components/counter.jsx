import React from "react";

const Counter = (props) => {
	const { value } = props;

	const stylesForContainer = 
		`container-sm 
		border border-primary 
		bg-success bg-gradient text-white`

	const formatValue = () => {
		return value === 0 ? "empty" : value;
	};

	const getBageClasses = () => {
		let classes = "badge m-2 ";
		classes += value === 0 ? "bg-warning" : "bg-danger";
		return classes;
	};

	return (

		<div className={stylesForContainer}>

			<div className="row mx-auto">

				<div className="col-sm-5 mt-2">
					<p className=" text-center font-weight-bolder">{props.name}</p>
				</div>

				<div className="col-sm mt-1">
					<span className={getBageClasses()}>{formatValue()}</span>
				</div>

				<div className="col-sm">
					<button className="btn btn-info btn-sm m-2"
						onClick={() => props.onIncrement(props.id)}
					>
						+
					</button>
				</div>

				<div className="col-sm">
					<button className="btn btn-info btn-sm m-2"
						onClick={() => props.onDecrement(props.id)}
					>
						-
					</button>
				</div>

				<div className="col-sm">
					<button className="btn btn-danger btn-sm m-2"
						onClick={() => props.onDelete(props.id)}
					>
						Delete
					</button>
				</div>

			</div>

		</div>

	);
};
export default Counter;