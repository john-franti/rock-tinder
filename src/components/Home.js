import React from "react";
import {Link} from 'react-router-dom'
import rock from '../assets/images/rock.png'

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="Home-header">
          <div className="row">
            <div className="col col-md-10">
              <img className="peeping-rock" src={rock} />
              <div className="jumbotron">
                <h2>
                  Can you detect aromatically what the Rock is preparing for
                  dinner?
                </h2>
                <Link to="/dig">
                  <button className="btn btn-info">START</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
