import React from "react"
// import {createStateVariable} from "./helper.js"
import MB from "./editor/MB.js"
import ToolsMenu from "./tools-menu.js"

class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			currentToolIndex: 0,
		}
	}
	render() {
		// return (<ul>
		// 	{this.props.toolsConfig.map((x, index)=>{
		// 		return <button key={index} onClick={()=>{
		// 			this.setState({currentToolIndex: index})
		// 		}}>{x.name} {index}</button>
		// 	})}
		// 	{React.createElement(this.props.toolsConfig[this.state.currentToolIndex].editor, null, null)}
		// </ul>)
		return (
	    <div className="container">
	      <ToolsMenu toolsConfig={this.props.toolsConfig}/>
	    </div>
	  );
	}
};

export function createApp(toolsConfig) {
	return <App toolsConfig={toolsConfig} />
}