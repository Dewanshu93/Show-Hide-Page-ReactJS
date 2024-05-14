// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstname: false, showLastname: false}
  showHideFirstname = () => {
    this.setState(prevState => {
      if (prevState.showFirstname === true) {
        return {showFirstname: false}
      } else {
        return {showFirstname: true}
      }
    })
  }
  showHideLastname = () => {
    this.setState(prevState => {
      if (prevState.showLastname === true) {
        return {showLastname: false}
      } else {
        return {showLastname: true}
      }
    })
  }
  render() {
    const {showFirstname, showLastname} = this.state
    return (
      <div className="mainContainer">
        <h1 className="head1">Show/Hide</h1>
        <div className="btnContainer">
          <div className="btnC1">
            <button
              className="btn1"
              type="button"
              onClick={this.showHideFirstname}
            >
              Show/Hide Firstname
            </button>
            {showFirstname ? <div className="Name">
              <p>Joe</p>
            </div> : null}
          </div>
          <div className="btnC1">
            <button
              className="btn1"
              type="button"
              onClick={this.showHideLastname}
            >
              Show/Hide Lastname
            </button>
            {showLastname ? <div className="Name">
              <p>Jonas</p>
            </div> : null}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
