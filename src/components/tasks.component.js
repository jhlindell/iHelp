import React from 'react'
import {Collection, CollectionItem} from 'react-materialize'

const Tasks = ({
  name
}) => {
  return (
    <div className="container">
      <div className="row">
          <Collection header='Tasks'>
          	<CollectionItem><span className="task-name">Mow Lawn:</span> <span className="points">10 points</span></CollectionItem>
            <CollectionItem><span className="task-name">Dishes:</span> <span className="points">12 points</span></CollectionItem>
          </Collection>
        </div>
      </div>

  )
}

export default Tasks
