import React, { useState } from "react";

import { postPlayers } from "../actions/index";

import { connect } from "react-redux";

const PlayerForm = (props) => {
  const [player, setPlayer] = useState({
    name: "",
    rank: "",
    nickname: ""
  });

  const handleChanges = (event) => {
    setPlayer({ ...player, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.postPlayers(player);
    setPlayer({
      name: "",
      rank: "",
      nickname: ""
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChanges}
            value={player.name}
            placeholder="Cristiano Ronaldo"
          />
        </label>

        <label>
          Rank:
          <input
            type="text"
            name="rank"
            onChange={handleChanges}
            value={player.rank}
            placeholder="2"
          />
        </label>

        <label>
          Nickname:
          <input
            type="text"
            name="nickname"
            onChange={handleChanges}
            value={player.nickname}
            placeholder="God"
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    playersArray: state.playersArray,
    errors: state.errors
  };
};

export default connect(mapStateToProps, { postPlayers })(PlayerForm);
