import { Component } from "react";
import SocialProfileClass from "./SocialProfile";

class ProfileUserClass extends Component {
  constructor(props) {
    super(props);
    // console.log("ProfileUserClass child constructor");
  }

  componentDidMount() {
    // console.log("ProfileUserClass child componentDidMount");
  }
  componentDidUpdate() {
    // console.log("ProfileUserClass child componentDidUpdate");
  }
  componentWillUnmount() {
    // console.log("ProfileUserClass child componentWillUnmount");
  }
  render() {
    const { name, html_url, avatar_url, bio } = this.props.data; // accessing full json data as props from parent class `ProfileClass`
    // console.log("ProfileUserClass child render");
    return (
      <div className="justify-center bg-slate-50 p-4">
        <h1 className="flex mb-4 justify-center">About Me</h1>
        <a href={html_url} target="_blank" rel='noopener noreferrer' className="mb-4 flex justify-center">
          <img
            className="rounded-full justify-center items-center text-center w-60"
            src={avatar_url}
            alt={name}
            title={name}
          />
        </a>
        <p className="profile-user-bio">{bio}</p>
        <SocialProfileClass />
      </div>
    );
  }
}

export default ProfileUserClass;
