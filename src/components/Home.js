import React from "react";
import rock from '../assets/images/rock.png'

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="Home-header">
          <div className="row">
            <div className="col col-md-10">
                <img className="peeping-rock" src={rock}/>              
                <div className="jumbotron">
                <h2>Can you detect aromatically what the Rock is preparing for dinner?</h2>
                <button className="btn btn-success">START</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
