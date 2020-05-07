import React, { useState, useEffect } from 'react';
import hitSound from '../../assets/dart-thrown.wav';
import buzzerSound from '../../assets/buzzer.wav';
import startSound from '../../assets/start.wav';
import finishSound from '../../assets/finish.wav';


const hitAudio = new Audio(hitSound);
const buzzerAudio = new Audio(buzzerSound);
const startAudio = new Audio(startSound);
const finishAudio = new Audio(finishSound);

const playSound = (score, result, round, flights) => {
  if (!result) return null;
  if (round === 8 && flights === 3) {
    finishAudio.play();
  } else if (result === 'SB' || result === 'DB') {
    hitAudio.play();
  } else if (result === 'change') {
    startAudio.play();
  }  else {
    buzzerAudio.play();
  }
};

export const EaglesEye = (props) => {
  const { state } = props;
  const { result, score, round, flights } = state;
  console.log(props)
  playSound(score, result, round, flights);

  useEffect(() => {
    startAudio.play();
  }, []);

  return (
    <div>
      <h1>Eagles Eye</h1>
      <h1>Score: {state.score}</h1>
      <h1>Round: {state.round}</h1>
      <ul>
        {state.roundHistory.map((score, i) => (
          <li key={`${i}-${score}`}>{score}</li>
        ))}
      </ul>
    </div>
  );
};
