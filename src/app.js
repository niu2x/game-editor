import React from "react"
// import {createStateVariable} from "./helper.js"

class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			currentToolIndex: 0,
		}
	}
	render() {
		return React.createElement(
			"ul", {
				// className: JSON.stringify(this.props)
			},
			<p>currentToolIndex: {this.state.currentToolIndex}</p>,
			... this.props.toolsConfig.map((x, index)=>{
				return <button onClick={()=>{
					this.setState({currentToolIndex: index})
				}}>{x.name} {index}</button>
			})
		);
	}
};

export function createApp(toolsConfig) {
	return <App toolsConfig={toolsConfig} />
}