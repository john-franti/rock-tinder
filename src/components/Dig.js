import React, { Fragment } from "react";

class Dig extends React.Component {
  state = {
    selectedRock: 0
  };
  render() {
    const { rocks } = this.props;
    return (
      <>
        {rocks.map((rock, index) => {
          if (index === this.state.selectedRock) {
            return (
              <Fragment key={index}>
                <h2>{rock.name}</h2>
                <img className="profile-image" src={rock.image} />
              </Fragment>
            );
          } else {
            return null;
          }
        })}
      </>
    );
  }
}

export default Dig;
