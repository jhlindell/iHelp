import React from 'react';
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
      <div>
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
        <MuiThemeProvider>
         <SelectField
          floatingLabelText = "Kids"
           onChange={this.handleChange}>
           {this.props.kids.map(kid => {
             return(
               <MenuItem key={kid.id} value={kid.id} primaryText={kid.kidName}/>
             )
           })}
         </SelectField>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default AggList;
