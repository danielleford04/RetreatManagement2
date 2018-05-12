import React, { Component } from 'react';
import { connect } from 'react-redux';

class StoredForms extends Component {
  renderList() {
    return this.props.storedForms.map((storedForm) => {
      return (
        <tr key={storedForm.name} >
          <td>{storedForm.name}</td>
          <td>{storedForm.date}</td>
          <td>{storedForm.notes}</td>
        </tr>
      );
    })
  }

  render() {
    return(
      <div>
        <h3> Stored Forms </h3>
        <button type="button" className="btn btn-primary">Upload New Form</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">File Name</th>
              <th scope="col">Date Uploaded</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    storedForms: state.storedForms
  }
}

export default connect(mapStateToProps)(StoredForms);
