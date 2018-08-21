import React from 'react'

const AllUsers = ({user}) => {
  return (
    <div>
      <ul className='users'> {user.name}
        {user.posessions.map(posession=> {
          return <li className='things' key={posession.id}>{posession.thing.name}</li>
        })}
      </ul>
    </div>
  )
}

export default AllUsers
