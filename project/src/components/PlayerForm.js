import React from "react";

import { connect } from "react-redux";

const PlayerForm = (props) => {
  return (
    <div>
      <p>playerform.js</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    playersArray: state.playersArray,
    errors: state.errors
  };
};

export default connect(mapStateToProps, {})(PlayerForm);
