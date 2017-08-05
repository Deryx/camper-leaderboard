import React, { Component } from "react";
import axios from 'axios';

let recentUrl = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
let alltimeUrl = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";

export class LeaderTable extends Component {
  constructor (props: any) {
    super(props);
    this.state = {
      recentUsers: [],
      alltimeUsers: [],
      userData: []
    }
  }

  componentDidMount() {
    axios.get(recentUrl)
      .then(response => {
        this.setState({
          recentUsers: response.data,
          userData: response.data
        });
      })

    axios.get(alltimeUrl)
      .then(response => {
        this.setState({
          alltimeUsers: response.data
        });
      })
  }

  handleClick(userType: string) {
    if(userType == "recent") {
      this.setState({
        userData: this.state.recentUsers
      })
    } else {
      this.setState({
        userData: this.state.alltimeUsers
      })
    }
  }

  render() {
    let i = 1;

    return (
      <table>
        <thead>
          <tr>
            <th colSpan={4}>Leaderboard</th>
          </tr>

          <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th onClick={this.handleClick.bind(this, "recent")} className="link">Points in Past 30 Days</th>
            <th onClick={this.handleClick.bind(this, "alltime")} className="link">All Time Points</th>
          </tr>
        </thead>

        <tbody>
          {this.state.userData.map(user => (<tr>
            <td>{i++}</td>
            <td><img src={ user.img }/> { user.username }</td>
            <td>{ user.recent }</td>
            <td>{ user.alltime }</td>
          </tr>))}
        </tbody>
      </table>
    )
  }
}
