import React from 'react'

const UsersWithThings = ({user}) => {
  return (
    <div className='user'>
      <ul>{user.name}
        {user.posessions.map(posession=> {
          return <li className='things' key={posession.id}>{posession.thing.name}</li>
        })}
      </ul>
    </div>
  )
}

export default UsersWithThings
