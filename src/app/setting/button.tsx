// components/ButtonSection.tsx
import React from 'react';


const ButtonSection: React.FC = () => (
  <div className="buttonContainer">
    <button className="button"><a href="/user">User</a></button>
    <button className="button"><a href="/status">Status</a></button>
    <button className="button"><a href="/setAntrian">Antrian</a></button>
    <button className="button"><a href="/jadwal">Jadwal</a></button>
    <button className="button"><a href="/loket">Loket</a></button>
  </div>
);

export default ButtonSection;
