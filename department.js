import React from 'react';
import trainScheduleData from './train-schd.json';

const TrainSchedule = () => {
  return (
    <div>
      <h1>Train Schedule</h1>
      <ul>
        {trainScheduleData.map((train, index) => (
          <li key={index}>
            Train Number: {train.trainNumber}, Departure Time: {train.departureTime}, Destination: {train.destination}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainSchedule;