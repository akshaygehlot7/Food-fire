import { Component } from "react";
import {
  Github_API_User,
  Github_UserName,
  Github_Repository_Name,
  options,
} from "../../Constants/Constants";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";

class ProfileRepoClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repoInfo: [],
    };
    // console.log("ProfileRepoClass child constructor");
  }

  async componentDidMount() {
    const response = await fetch(
      Github_API_User + Github_UserName + "/repos",
      options
    );
    const json = await response.json();
    this.setState({
      repoInfo: json,
    });
    // console.log("ProfileRepoClass child componentDidMount");
  }
  componentDidUpdate() {
    // console.log("ProfileRepoClass child componentDidUpdate");
  }
  componentWillUnmount() {
    // console.log("ProfileRepoClass child componentWillUnmount");
  }
  render() {
    const { followers, html_url } = this.props.followers; // accessing followers as props from parent class `ProfileClass`
    const [...repoList] = this.state.repoInfo;
    // console.log("ProfileRepoClass child render");
    return (
      <div className="bg-slate-100">
        {repoList
          .filter((repo) => repo.name === Github_Repository_Name)
          .map((repo) => {
            return (
              <div key={repo.id} className="flex flex-col justify-center items-center">
                <h1>
                  <a href={repo.html_url} target="_blank" rel='noopener noreferrer' className="text-2xl mb-4 text-slate-500 hover:bg-slate-700 hover:text-white">{repo.name}</a>
                </h1>
                <h3 className="text-xl mb-4" style={{width: 600}}>{repo.description}</h3>

                <div className="flex gap-4">
                  <h3>
                    <a href={html_url} target="_blank" rel='noopener noreferrer' className="flex items-center">
                      <FiUsers size={24}/>
                      <span className="text-xl">{followers} Followers</span>
                    </a>
                  </h3>
                  <h3>
                    <a href={repo.html_url} target="_blank" rel='noopener noreferrer' className="flex items-center">
                      <BiGitRepoForked size={24} />
                      <span className="text-xl">{repo.forks_count} Forks</span>
                    </a>
                  </h3>
                  <h3>
                    <a href={repo.html_url} target="_blank" rel='noopener noreferrer' className="flex items-center">
                      <BiStar size={24} />
                      <span className="text-xl">{repo.stargazers_count} Stars</span>
                    </a>
                  </h3>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default ProfileRepoClass;
