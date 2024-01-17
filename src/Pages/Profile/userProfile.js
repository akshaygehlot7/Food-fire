import React from "react";
import SocialProfileClass from "./SocialProfile";

const ProfileUserClass=(props)=> {  
    const { name, html_url, avatar_url, bio } = this.props.data;
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

export default ProfileUserClass;
