import {
	makeStyles
} from '@material-ui/core/styles';

const styles = makeStyles( () => ( {
	body: {
		backgroundColor: 'green'
	},
	container: {
		backgroundColor: 'pink',
	},

	nav: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
		height: '65px',
		backgroundColor: 'purple',
		padding: '0 10px',
		margin: 0,
		color: '#ffff'
	},
	mainTitle: {
		display: 'flex',
		alignItems: 'center',
		padding: 0,
		margin: 0
	},

	list: {
		display: 'flex',
		listStyleType: 'none',
		alignItems: 'center',
		justifyContent: 'space-around',
		padding: 0,
		margin: 0,
		width: '250px',
	},

	link: {
		textDecoration: 'none',
		color: '#ffff'
	}


} ) );

export default styles;