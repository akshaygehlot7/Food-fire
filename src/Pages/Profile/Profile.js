import { Component } from "react";
import ProfileUserClass from "./userProfile";
import ProfileRepoClass from "./ProfileRepo";
import food from "../../Assets/images/burger-image.png";
import {
  Github_API_User,
  Github_UserName,
  options,
} from "../../Constants/Constants";

// Profileclass is class component
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        bio: "",
      },
    };
    // console.log("Profile-Parent constructor");
  }

  async componentDidMount() {
    const response = await fetch(Github_API_User + Github_UserName, options); // Fetch the data from github User API
    const json = await response.json();
    this.setState({
      userInfo: json,
    });
    // console.log("Profile-Parent componentDidMount");
  }

  componentDidUpdate() {
    // console.log("Profile-Parent componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("Profile-Parent componentWillUnmount");
  }
  render() {
    const { userInfo } = this.state; // object destructuring for json data
    // console.log("Profile-Parent - render");
    return (
      <>
        {userInfo.name === "" ? null : (<>
          <div className="flex flex-col mr-4 ml-4 mt-5">
            <div className="flex justify-center gap-2">
            <div className="flex w-96">
                <ProfileUserClass data={userInfo} />
                {/* Passing props data (full json data) from parent to child */}
              </div>
              <div className="flex flex-col bg-slate-50 p-6 justify-center items-center">
                <h1 className="text-3xl">
                  Food<span className="text-2xl">Fire</span> App Github Repository
                </h1>
                {/* Passing props followers from parent to child */}
                <ProfileRepoClass followers={userInfo} />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap m-10 justify-evenly items-center">
        <div className="flex flex-wrap flex-col justify-start overflow-y-hidden items-start">
          <h1 className='text-5xl p-3 font-bold text-slate-700'>
            Welcome to <br /> The world of <br />
          </h1>
            <h1 className='text-5xl font-bold text-slate-500 p-3 bg-slate-100 rounded-2xl '>Tasty & Fresh Food</h1>
          <h1 className='text-xl font-bold text-slate-700 p-3'>
            "Better you will feel if you eat a Food<span>Fire</span> healthy
            meal"
          </h1>
        </div>
        <div className="flex flex-wrap flex-col justify-center items-center overflow-y-hidden">
          <img className="w-full" src={food} alt="" />
        </div>
      </div>
          </>
        )}
      </>
    );
  }
}

export default Profile;
