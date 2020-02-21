import React from "react";
import PlayerCard from "./PlayerCard";

import { connect } from "react-redux";

const PlayerList = (props) => {
  return (
    <div>
      <p>playerlist.js</p>
      <PlayerCard />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    playersArray: state.playersArray,
    isFetching: state.isFetching,
    errors: state.errors
  };
};

export default connect(mapStateToProps, {})(PlayerList);
