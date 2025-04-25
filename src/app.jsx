import React from "react"
// import {createStateVariable} from "./helper.js"
import ToolsMenu from "./tools-menu.jsx"
import viewActionHandler from "./view-aciton-handler.js"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentToolIndex: -1,
    }

    viewActionHandler.setApp(this)
  }
  render() {
    return (
      <div className="container">
        <ToolsMenu toolsConfig={this.props.toolsConfig}/>
        { 
          (this.state.currentToolIndex >= 0) &&
            React.createElement(this.props.toolsConfig[this.state.currentToolIndex].editor, null, null) 
        }
      </div>
    );
  }

  notifyClickTool(toolIndex) {
    this.setState({currentToolIndex: toolIndex})
  }
};

export function createApp(toolsConfig) {
  return <App toolsConfig={toolsConfig} />
}