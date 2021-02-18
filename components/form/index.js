import styles from './styles';

export default function Formulario() {
	const classes = styles();
	return (
		<div className={ classes.container }>
			<form className={ classes.form }>
				<div className={ classes.form__item }>
					<label for="Fullname">Nome Completo (Sem Abreviações)</label>
					<input type="text" id="Fullname" name="Fullname" />
				</div>
				<div className={ classes.form__item }>
					<label for="Email">Email</label>
					<input type="text" id="Email" name="Email" />
				</div>
				<div className={ classes.form__item }>
					<label for="Cpf">Cpf</label>
					<input type="text" id="Cpf" name="Cpf" />
				</div>
				<div className={ classes.form__item }>
					<label for="Telefone">Telefone</label>
					<input type="text" id="Telefone" name="Telefone" />
				</div>
			</form>

		</div> )
}
