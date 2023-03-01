import './styles.css';
import IMAGE from './react.png';
import LOGO from './logo.svg';

export const App = () => {
	return (
		<>
			<h1>React/TypeScript/Webpack Template</h1>;
			<img src={IMAGE} alt='Logo' width='300' height='300' />
			<img src={LOGO} alt='Logo' width='300' />
		</>
	);
};
