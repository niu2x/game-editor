import React from "react"

export default class MB extends React.Component {
  render() {
    return (
      <>
        <div className="form-floating">
          <textarea className="form-control" placeholder="Leave a comment here"></textarea>
          <button type="submit" className="btn btn-primary" onClick={()=>{this.onClickSubmit()}}>Submit</button>
        </div>
      </>
    )
  }

  onClickSubmit() {
  }
}