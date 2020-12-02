import React from "react";
import "./App.css";
import Bug from "./bugs/Bug";

const bugs = [
  {
    id: "HR-00001",
    description: "This is a test HR issue",
    createdBy: "pankaj.upadhyay",
    assignedTo: "pankaj.upadhyay",
    status: "Open",
  },
  {
    id: "IT-121314",
    description: "This is a test IT issue",
    createdBy: "pankaj.upadhyay",
    assignedTo: "pankaj.upadhyay",
    status: "On Hold",
  },
  {
    id: "FN-121212",
    description: "This is a test Finance issue",
    createdBy: "pankaj.upadhyay",
    assignedTo: "pankaj.upadhyay",
    status: "In Progress",
  },
  {
    id: "TR-121212",
    description: "This is a test Travel issue",
    createdBy: "pankaj.upadhyay",
    assignedTo: "pankaj.upadhyay",
    status: "In Progress",
  },

  {
    id: "TR-01234",
    description: "This is a test Travel issue",
    createdBy: "pankaj.upadhyay",
    assignedTo: "pankaj.upadhyay",
    status: "Resolved",
  },
];

class App extends React.Component {
  public render() {
    const forEach = bugs.forEach((bug) => console.log(bug));
    console.log("Using map");
    const map = bugs.map((bug) => console.log(bug));
    console.log("for each output", forEach);
    console.log("map output", map);
    return (
      <div className="flex-column">
        <header>
          <div className="flex-row navbar">
            <a href="#">Dashboard</a>
            <a href="#">Assigned to Me</a>
            <a href="#">Reported By Me</a>
            <a href="#">Search</a>
            <a href="#">Create</a>
          </div>
        </header>
        <div>
          <h1>Bugs assigned to you</h1>
          <ul className="list">
            <li className="flex-row">
              <div>Key</div>
              <div>Summary</div>
              <div>Assigned To</div>
              <div>Status</div>
            </li>
            {bugs.map((bug) => {
              return (
                <Bug
                  key={bug.id}
                  id={bug.id}
                  description={bug.description}
                  status={bug.status}
                  assignedTo={bug.assignedTo}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
