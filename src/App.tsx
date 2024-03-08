import React from "react";
import logo from "./logo.svg";
import "./App.css";
import jsonData from "./CollegeBasketballTeams.json";

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

class Team extends React.Component<TeamProps> {
  render() {
    const { school, name, city, state } = this.props;
    return (
      <div className="team-card">
        <h2>School Name: {school}</h2>
        <h3>Mascot Name: {name}</h3>
        <h3>
          Location: {city}, {state}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div className="team-list">
      {jsonData.teams.map((team) => (
        <Team key={team.tid} {...team} />
      ))}
    </div>
  );
}

function Welcome() {
  return <h1>All the colleges in NCAA Basketball</h1>;
}
function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
