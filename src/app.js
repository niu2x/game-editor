import React from "react"

class App extends React.Component {
	render() {
		return React.createElement(
			"ul", {
				className: "ingredients"
			},
			React.createElement('h1', null, 'hhhh'),
			React.createElement('h1', null, 'hhhh'),
			React.createElement('h1', null, 'hhhh')
		);
	}
};

export function createApp() {
	return (<App></App>)
}