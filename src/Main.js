import React, {Component} from 'react'
import axios from 'axios'
import AllUsers from './AllUsers'
import UsersWithThings from './UsersWithThings'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      allUsers: [],
      usersWithThings: []
    }
    this.withThings = this.withThings.bind(this)
  }

  async componentDidMount() {
    let response = await axios.get('/api')
    this.setState({
      allUsers: response.data
    })
  }

  async withThings() {
    let response = await axios.get('/api/users')
    this.setState({
      usersWithThings: response.data
    })
  }



  render(){
    return (
      <div>
        <div>
          <label className='label' id='toggle' onClick={()=> {
              let toggle = document.getElementById('toggle')
              if(toggle.innerHTML === 'Show Only Users With Things'){
                this.withThings()
                toggle.innerHTML = 'Show All Users'
              } else {
                this.setState({
                  usersWithThings: []
                })
                toggle.innerHTML = 'Show Only Users With Things'
              }

            }}>Show Only Users With Things</label>
        </div>
        <div>
        {this.state.usersWithThings.length
          ? this.state.usersWithThings.map(user=> {
            return <UsersWithThings key={user.id} user={user} />})
          : this.state.allUsers.map(user => {
            return <AllUsers key={user.id} user={user} />})
          }
        </div>

      </div>

    )
  }
}
