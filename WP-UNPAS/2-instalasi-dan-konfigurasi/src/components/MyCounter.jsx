/* eslint-disable react/prop-types */
export default function MyCounter({counter}) {
	if (counter > 9 || counter < 0) {
		counter = 'done!';
	}
	
	return (
		<span style={{ margin: 20 }}>{counter}</span>
		)
	}