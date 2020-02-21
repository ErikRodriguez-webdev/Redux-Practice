import React, { useEffect } from "react";
import PlayerCard from "./PlayerCard";
import { fetchPlayers } from "../actions/index";

import { connect } from "react-redux";

const PlayerList = (props) => {
  useEffect(() => {
    props.fetchPlayers();
  }, []);

  return (
    <div>
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

export default connect(mapStateToProps, { fetchPlayers })(PlayerList);
