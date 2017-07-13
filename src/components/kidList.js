import React from 'react';
import Kid from "./kid.js";
import Kidform from './kidform.js';
import {Table, Row, Col} from 'react-materialize'

class KidList extends React.Component {

  render() {
    return (
      <Row className="kidList">
        <Col m={8} offset="m2">
          <Table>
            <thead>
              <tr>
                <th data-field="id">Id</th>
                <th data-field="kidName">Kid Name</th>
                <th data-field="kidAge">Kid Age</th>
              </tr>
            </thead>
            <tbody>
              { this.props.kids.map(kid => <Kid key={ kid.id } kid = {kid} />)}
            </tbody>
          </Table>
          <Kidform add={this.props.addKid}/>
        </Col>
      </Row>
    )
  }
}

export default KidList;
