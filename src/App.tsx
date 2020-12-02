import React from "react";
import "./App.css";
import BugList, { IBug } from "./Bugs/BugList";

const initialBugList: IBug[] = [
	{
		id: "HR-121212",
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
];

type AppProps = {};
type AppsState = { bugs: IBug[] };
export default class App extends React.Component<AppProps, AppsState> {
	constructor(props: AppProps) {
		super(props);
		this.state = {
			bugs: initialBugList,
		};

		console.log("App Component > constructor");
	}

	public static getDerivedStateFromProps() {
    console.log("App Component > getDerivedStateFromProps", arguments);
    return null;
	}

	public getSnapshotBeforeUpdate() {
    console.log("App Component > getSnapshotBeforeUpdate", arguments);
    return null;
	}

	public componentDidMount() {
		console.log("App Component > componentDidMount", arguments);
	}

	public componentDidUpdate() {
		console.log("App Component > componentDidUpdate", arguments);
	}

	public componentDidCatch() {
		console.log("App Component > componentDidCatch", arguments);
	}

	public componentWillUnmount() {
		console.log("App Component > componentWillUnmount", arguments);
	}

	public shouldComponentUpdate() {
		console.log("App Component > shouldComponentUpdate", arguments);
		return true;
	}

	public render() {
		console.log("App Component > render", arguments);
		const { bugs } = this.state;
		return (
			<div className="flex-column">
				<header>
					<div className="flex-row navbar">
						<a href="#link">Dashboard</a>
						<a href="#link">Assigned to Me</a>
						<a href="#link">Reported By Me</a>
						<a href="#link">Search</a>
						<a href="#link">Create</a>
					</div>
				</header>
				<div>
					<h1>Bugs assigned to you</h1>
					<BugList bugs={bugs} onChangeStatus={this.onChange} />
					{/* <ul className="list">
						<li className="flex-row">
							<div>Key</div>
							<div>Summary</div>
							<div>Assigned To</div>
							<div>Status</div>
						</li>
						{bugs.map((bug) => (
							<Bug key={bug.id} {...bug} onChangeStatus={this.onChange}></Bug>
						))}
					</ul> */}
				</div>
			</div>
		);
	}

	private onChange = (id: string, status: string) => {
    const { bugs } = this.state;
    const changedIndex = bugs.findIndex((bug) => bug.id === id);
    const newList = [...bugs];
    const updatedBug = {...bugs[changedIndex]};
    updatedBug.status = status;
    newList[changedIndex] = updatedBug;
    this.setState({bugs: newList});
		/* const changedBug = bugs.find((bug) => bug.id === id);
		if (changedBug) {
			const updatedBugs = bugs.filter((bug) => bug.id !== id);
			this.setState({ bugs: [...updatedBugs, { ...changedBug, status }] });
		}*/
	};
}
// function App() {
// 	return (
// 		<div className="flex-column">
// 			<header>
// 				<div className="flex-row navbar">
// 					<a href="#link">Dashboard</a>
// 					<a href="#link">Assigned to Me</a>
// 					<a href="#link">Reported By Me</a>
// 					<a href="#link">Search</a>
// 					<a href="#link">Create</a>
// 				</div>
// 			</header>
// 			<div>
// 				<h1>Bugs assigned to you</h1>
// 				<ul className="list">
// 					<li className="flex-row">
// 						<div>Key</div>
// 						<div>Summary</div>
// 						<div>Assigned To</div>
// 						<div>Status</div>
// 					</li>
// 					{bugs.map((bug) => {
//             return <Bug key={bug.id} {...bug}></Bug>
// 						{/*<li key={bug.id} className="flex-row">
// 							<div>{bug.id}</div>
// 							<div>{bug.description}</div>
// 							<div>{bug.assignedTo}</div>
// 							<div>{bug.status}</div>
//           </li>*/}
//         })}
// 					{/*
// 					<li className="flex-row">
// 						<div>HR-121212</div>
// 						<div>This is a test HR issue</div>
// 						<div>pankaj.upadhyay</div>
// 						<div>Open</div>
// 					</li>
// 					<li className="flex-row">
// 						<div>FN-121314</div>
// 						<div>This is a test Finance issue</div>
// 						<div>pankaj.upadhyay</div>
// 						<div>In Progress</div>
// 					</li>
// 					<li className="flex-row">
// 						<div>TR-121315</div>
// 						<div>This is a test Travel issue</div>
// 						<div>pankaj.upadhyay</div>
// 						<div>In Progress</div>
// 					</li>
// 					<li className="flex-row">
// 						<div>IT-121316</div>
// 						<div>This is a test IT issue</div>
// 						<div>pankaj.upadhyay</div>
// 						<div>In Progress</div>
// 					</li>
//         */}
// 				</ul>
// 			</div>
// 		</div>
// 	);
// }

// export default App;
