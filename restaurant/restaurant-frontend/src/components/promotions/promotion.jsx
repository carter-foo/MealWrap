import React from "react";
import './styles.css';
import EditDialog from './promoEditor';

export default class promotion extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: props.data
    }
  }

  handleDialogForm = (event, newData) => {
    console.log(event);
    this.setState({
      data: newData
    })
  }

  render() {
    return (
      <div>
        <table className = 'promotion'>
          <tbody>
            <tr>
              <th>{this.state.data.title}</th>
              <th>{this.state.data.description}</th>
              <th>{this.state.data.category}</th>
              <th>{this.state.data.priceReduction}% off</th>
              <th><EditDialog handleSubmitParent={this.handleDialogForm.bind(this)} data={this.state.data}/></th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
