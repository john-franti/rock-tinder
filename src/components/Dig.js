import React, { Fragment } from "react";
import Rock from "./Rock"

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
              <div className="dig-header" key={index}>
                <Rock rock={rock} onDislikeRock={this.props.onDislikeRock} onLikeRock={this.props.onLikeRock}/>
              </div>
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
