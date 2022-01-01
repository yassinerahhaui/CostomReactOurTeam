import React, { Component } from "react";
import Card from "./Card";
import memberInfo from "./MemberInfo";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      memberInfo: memberInfo,
      members: [],
      number: 0,
    };
    this.fetchMember = this.fetchMember.bind(this);
    // this.mapping = this.mapping.bind(this);
  }
  fetchMember() {
    console.log(this.state.members);
    if (this.state.number < 8) {
      this.state.members.push(this.state.memberInfo[this.state.number]);
      this.setState({ number: this.state.number + 1 });
    } else {
      this.setState({ number: (this.state.number = 0), members: [] });
    }
    this.newMembers = this.state.members.map((member) => {
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
  // mapping(x) {
  //   const dataTeam = x.map((user) => {
  //     return (
  //       <Card
  //         key={user.id}
  //         name={user.name}
  //         img={user.img}
  //         position={user.position}
  //         phone={user.phone}
  //         email={user.email}
  //         website={user.website}
  //       />
  //     );
  //   });
  //   return dataTeam;
  // }

  render() {
    // id , name , img , position , phone , email , website

    return (
      <div className="container">
        <button
          className="btn btn-dark btn-lg fw-bolder w-100 mt-2"
          onClick={this.fetchMember}
        >
          show data
        </button>
        <div className="row">{this.newMembers}</div>
      </div>
    );
  }
}
export default Home;
