import { Component } from "react";
import { SiGmail, SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
import {
  Github_Link,
  Email_Link,
  Linkedin_Link,
  Twitter_Link,
} from "../../Constants/Constants";

const SocialProfileClass =()=> {

    return (
      <div className="flex gap-6 mt-5 justify-center">
        <a
          href={Linkedin_Link}
          title="Follow me on Linkedin"
          className="icon-button linkedin"
          target="_blank"
          rel='noopener noreferrer'
        >
          <i>
            <SiLinkedin title="Follow me on Linkedin" size={30}/>
          </i>
        </a>
        <a href={Twitter_Link} title="Follow me on Twitter" className="icon-button twitter" target="_blank" rel='noopener noreferrer'>
          <i>
            <SiTwitter title="Follow me on Twitter" size={30}/>
          </i>
        </a>
        <a href={Github_Link} title="Follow me on Github" className="icon-button github" target="_blank" rel='noopener noreferrer'>
          <i>
            <SiGithub title="Follow me on Github" size={30}/>
          </i>
        </a>
        <a href={Email_Link} title="Any Query! Mail me" className="icon-button email" target="_blank" rel='noopener noreferrer'>
          <i>
            <SiGmail title="Any Query! Mail me" size={30}/>
          </i>
        </a>
      </div>
    );
  }

export default SocialProfileClass;
