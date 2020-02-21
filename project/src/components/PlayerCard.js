import React from "react";

const PlayerCard = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.rank}</p>
      <p>{props.nickname}</p>
    </div>
  );
};
export default PlayerCard;
