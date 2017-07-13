import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';

class AggList extends React.Component {

  handleChange = (event, index, value) => this.setState({value});

  componentWillMount() {
    injectTapEventPlugin();
  }

  render(){
    return (
      <MuiThemeProvider>
       <SelectField
        floatingLabelText = "Tasks"
         onChange={this.handleChange}>
         {this.props.tasks.map(task => {
           return(
             <MenuItem key={task.id} value={task.id} primaryText={task.taskName}/>
           )
         })}
       </SelectField>
      </MuiThemeProvider>
    )
  }
}

export default AggList;
