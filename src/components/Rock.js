import React from "react";

class Rock extends React.Component {
  handleLikeRock = () => {
    this.props.onLikeRock(this.props.rock);
  };
  handleDislikeRock = () => {
    this.props.onDislikeRock(this.props.rock);
  };

  render() {
    let { rock } = this.props;
    return (
      <div className="row">
        <div className="Home-header col col-md-3">
          <p onClick={this.handleDislikeRock} className="btn btn-danger">
            I don't like this Rock
          </p>
        </div>
        <div className="col col-md-6">
          <div className="card border-primary mb-3">
            <img
              className="profile-image"
              src={rock.image}
              alt="Card image"
            ></img>
            <div className="card-body">
              <h4 className="card-title">{rock.name}</h4>
              <p className="card-text">
                This is an example profile Rock description. It should contain
                useful Rock information.
              </p>
            </div>
          </div>
        </div>
        <div className="Home-header col col-md-3">
          <p onClick={this.handleLikeRock} className="btn btn-success">
            I like this Rock
          </p>
        </div>
      </div>
    );
  }
}

export default Rock;
