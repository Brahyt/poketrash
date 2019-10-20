import React from 'react';

export default class Mon extends React.Component {
  state = {
  }

  componentDidMount(){
    const fetchData = () => {
      const fetchId = this.props.match.params.id
      const monsterUrl = this.props.monsters[fetchId].url
      fetch(monsterUrl)
        .then(res => res.json())
        .then(data => {
          this.setState(data)
          console.log(data.sprites.front_default)
        })
    }
    fetchData()
  }
  render(){
    const monster = this.state
  return (
    <div>
      <header><h3>{monster.name}</h3></header>
      <div>
        <ul style={{listStyle: "none"}}>
          <li>Height: {monster.height}</li>
          <li>Weight: {monster.weight}</li>
        </ul>

      </div>
    </div>
  )
  }
}
