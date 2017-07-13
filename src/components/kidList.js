import React from 'react';
import Kid from "./kid.js";
import Kidform from './kidform.js';
import {Table, Row, Col} from 'react-materialize'

class KidList extends React.Component {

  constructor(){
    super();
    this.state = {
        kids: [
          {id: 1, kidName: "Taylor", kidAge: 12},
          {id: 2, kidName: "Hunter", kidAge: 10}
        ]
    }
  }

  addKid = (kid) => {
    let kids = this.state.kids;
    kid.id = kids.length +1;
    kids.push(kid);
    this.setState({kids:kids})
  }

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
              { this.state.kids.map(kid => <Kid key={ kid.id } kid = {kid} />)}
            </tbody>
          </Table>
          <Kidform add={this.addKid}/>
        </Col>
      </Row>
    )
  }
}

export default KidList;
