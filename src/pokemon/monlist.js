import React from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom'
import Mon from './mon';

export default class MonList extends React.Component {
  render() {
    console.log(this.props.monsters)
    const allPoke = () => {
      return (
        this.props.monsters.map((monster, i) => {
          return (
            <Link to={`/${i}`}>
              <li>{monster.name}</li>
            </Link>
          )
        })
      )
    }
    return (
      <div>
        {allPoke()}
      </div>
    )
  }
}
