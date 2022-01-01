import React, { Component } from "react";

class Card extends Component {
  render() {
    // id , name , img , position , phone , email , website
    let email = this.props.email;
    let costomEmail;
    if (email.length <= 19) {
      costomEmail = (
        <p className="email">
          <b>Email: </b>
          {email}
        </p>
      );
    } else {
      costomEmail = <p className="email">{email}</p>;
    }
    return (
      <div className="col-md-6 col-lg-4">
        <div className="card-team p-2">
          <img
            src={this.props.img}
            className="card-img"
            alt={this.props.name}
          />
          <div className="info">
            <h1 className="name text-center fw-bolder pt-2">
              {this.props.name}
            </h1>
            <p className="position text-center">
              <small>{this.props.position}</small>
            </p>
            <p>
              <b>Phone: </b>
              <span className="phone">{this.props.phone}</span>
            </p>
            {costomEmail}
            <p className="website">
              <b>Website: </b>
              {this.props.website}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
