import React from "react"
import viewActionHandler from "./view-aciton-handler.js"

export default class ToolsMenu extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">GameEditor</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {
                this.props.toolsConfig.map((item, index)=>{
                  return (
                    <li className="nav-item" key={index}>
                      <a className="nav-link" onClick={()=>{viewActionHandler.onClickToolsMenu(index)}}>{item.name}</a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
};