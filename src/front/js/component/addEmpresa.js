import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
const AddEmpresa = props => {
	const { store, actions } = useContext(Context);
	const [form, setForm] = useState({ email: "", password: "", nombre: "" });

	const handleChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = event => {
		actions.registroEmpresa(form.nombre, form.email, form.password);
	};

	return (
		<>
			<div className="empresaInput container">
				<div>
					<form onSubmit={handleSubmit}>
						<div className="inputEmpresa">
							<input
								type="text"
								className="form-control my-2"
								name="nombre"
								value={form.nombre}
								onChange={handleChange}
								placeholder="Nombre"
							/>
							<input
								type="text"
								className="form-control my-2"
								name="email"
								value={form.email}
								onChange={handleChange}
								placeholder="Email"
							/>
							<input
								type="text"
								className="form-control my-2"
								name="password"
								value={form.password}
								onChange={handleChange}
								placeholder="Contraseña"
							/>
						</div>
						<div className="text-center">
							<button type="submit" className="btn btn-dark">
								Registrar
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default AddEmpresa;
