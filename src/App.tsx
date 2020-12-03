import React from "react";
import "./App.css";
import Bug from "./bugs/Bug";
interface IBug {
  id: string;
    description: string;
    createdBy: string;
    assignedTo: string;
    status: string;
}

const defaultBugList = [
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

type AppProps = {};
type AppState = {bugs: IBug[], counter: number};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      bugs: defaultBugList,
      counter: 1,
    };
  }
  public render() {
    const { bugs, counter } = this.state;
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
    <button onClick={() => this.setState({counter: counter + 1})}>{counter}</button>
          <ul className="list">
            <Bug id="ID"
                  description="Description"
                  status="Status"
                  assignedTo="Assigned To"
            />
            {bugs.map((bug) => {
              return (
                <Bug
                  key={bug.id}
                  id={bug.id}
                  description={bug.description}
                  status={bug.status}
                  assignedTo={bug.assignedTo}
                  onChangeStatus= {this.onChange}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  private onChange = (id: string, status: string) => {
    const { bugs } = this.state;
    const index = bugs.findIndex((bug) => bug.id === id);
    
		if (index>=0) {
      const changedBug = {...bugs[index]};
      const updatedBugs = [...bugs];
      changedBug.status = status;
      updatedBugs[index] = changedBug;
			this.setState({ bugs:  updatedBugs});
		}
	};
}

export default App;
