import React, { useEffect } from "react";
import "../assets/styles/player.scss";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getVideoSource } from "../actions";
import { NotFound } from "./NotFound";

const Player = (props) => {
  const navigate = useNavigate();
  const id = useParams();
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id.id);
  }, []);

  console.log(id.id);

  const handleGoBack = () => {
    navigate(-1);
  };

  return hasPlaying ? (
    
      <div className="player">
        <video controls autoPlay>
          <source src={props.playing.source} type="video/mp4" />
        </video>
        <div className="player-back">
          <button type="" onClick={handleGoBack}>
            Regresar
          </button>
        </div>
      </div>
    
  ) : (
    <NotFound />
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
