import React, { Component } from "react";
import { connect } from "react-redux";
class ContactDetail extends Component {
  render() {
    if (!this.props.contact) {
      return <div>Click one of the contacts to see details.</div>;
    }
    return (
      <div>
        <h4> {this.props.contact.name}'s Profile</h4>
        <div>
          <strong> Status:</strong> {this.props.contact.status}
        </div>
        <div>
          {" "}
          <strong> Phone:</strong> {this.props.contact.phone}
        </div>
        <div>
          {" "}
          <strong> Country:</strong> {this.props.contact.country}
        </div>
        <div>
          {" "}
          <strong>University </strong>
          {this.props.contact.university}
        </div>
        <div>
          <strong> Files:</strong> {this.props.contact.files}
        </div>
        <div>
          <strong>Languages: </strong> {this.props.contact.languages}
        </div>
        <button style={{ backgroundColor: "#38F538" }}> Enter room </button>{" "}
        &nbsp;
        <button style={{ backgroundColor: "#F52A1B" }}>Delete room</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contact: state.activeContact
  };
}

export default connect(mapStateToProps)(ContactDetail);
