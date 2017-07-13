import React from 'react';

class Kid extends React.Component {

  render() {
    return (
      <tr>
        <td>{this.props.kid.id} </td>
        <td>{this.props.kid.kidName} </td>
        <td>{this.props.kid.kidAge} </td>
      </tr>
    )
  }
}

export default Kid;
