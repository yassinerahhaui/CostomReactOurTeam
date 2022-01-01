import React, { Component } from "react";
import Card from "./Card";
import memberInfo from "./MemberInfo";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      memberInfo: memberInfo,
      members: [],
      counter: 0,
      disabled: "",
    };

    this.fetchMember = this.fetchMember.bind(this);
  }

  fetchMember() {
    if (this.state.counter < 8) {
      this.state.members.push(memberInfo[this.state.counter]);
      this.setState({
        counter: this.state.counter + 1,
        disabled: "",
      });
    } else {
      this.setState({
        disabled: "disabled",
      });
    }
    this.memberTeam = this.state.members.map((member) => {
      return (
        <Card
          key={member.id}
          name={member.name}
          img={member.img}
          position={member.position}
          phone={member.phone}
          email={member.email}
          website={member.website}
        />
      );
    });
  }
  // mapping(data) {
  //   // id , name , img , position , phone , email , website
  //   const members = data.map((member) => {
  //     return (
  //       <Card
  //         key={member.id}
  //         name={member.name}
  //         img={member.img}
  //         position={member.position}
  //         phone={member.phone}
  //         email={member.email}
  //         website={member.website}
  //       />
  //     );
  //   });
  //   return members;
  // }
  render() {
    return (
      <div className="container">
        <button
          className="btn btn-lg btn-outline-info fw-bold w-100 "
          onClick={this.fetchMember}
          disabled={this.state.disabled}
        >
          fetch member
        </button>
        <div className="row">{this.memberTeam}</div>
      </div>
    );
  }
}

export default Home;
