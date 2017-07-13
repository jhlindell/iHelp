import React from 'react'
import {Collection, CollectionItem} from 'react-materialize'

const Kid = ({
  name
}) => {
  return (
    <div className="container">
      <div className="row">
          <Collection header='My Kids'>
          	<CollectionItem><span className="kid-name">Taylor:</span> <span className="points">0 points</span></CollectionItem>
            <CollectionItem><span className="kid-name">Hunter:</span> <span className="points">12 points</span></CollectionItem>
            <CollectionItem><span className="kid-name">Jordan:</span> <span className="points">33 points</span></CollectionItem>
            <CollectionItem><span className="kid-name">Emma:</span> <span className="points">7 points</span></CollectionItem>
          </Collection>
        </div>
      </div>
  )
}

export default Kid
