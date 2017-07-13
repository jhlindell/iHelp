import React from 'react';

class Kid extends React.Component {

  render() {
    return (
      <tr>
        <td>{this.props.kid.id} </td>
        <td>{this.props.kid.kidName} </td>
        <td>{this.props.kid.pointsEarned} </td>
      </tr>
    )
  }
}

export default Kid;
