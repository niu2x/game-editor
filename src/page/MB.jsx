import React from "react"

export default class MB extends React.Component {
  render() {
    return (
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here"></textarea>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    )
  }
}