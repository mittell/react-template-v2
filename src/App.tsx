import './styles.css';
import IMAGE from './react.png';
import LOGO from './logo.svg';

export const App = () => {
	return (
		<>
			<h1>
				React/TypeScript/Webpack Template - {process.env.NODE_ENV} -{' '}
				{process.env.NODE_ENV}
			</h1>
			;
			<img src={IMAGE} alt='Logo' width='300' height='300' />
			<img src={LOGO} alt='Logo' width='300' />
		</>
	);
};
