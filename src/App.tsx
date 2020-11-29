import React from "react";
import "./App.css";
import Bug from "./Bugs/Bug";

const bugs = [
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
function App() {
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
            return <Bug key={bug.id} {...bug}></Bug>
						{/*<li key={bug.id} className="flex-row">
							<div>{bug.id}</div>
							<div>{bug.description}</div>
							<div>{bug.assignedTo}</div>
							<div>{bug.status}</div>
          </li>*/}
        })}
					{/*
					<li className="flex-row">
						<div>HR-121212</div>
						<div>This is a test HR issue</div>
						<div>pankaj.upadhyay</div>
						<div>Open</div>
					</li>
					<li className="flex-row">
						<div>FN-121314</div>
						<div>This is a test Finance issue</div>
						<div>pankaj.upadhyay</div>
						<div>In Progress</div>
					</li>
					<li className="flex-row">
						<div>TR-121315</div>
						<div>This is a test Travel issue</div>
						<div>pankaj.upadhyay</div>
						<div>In Progress</div>
					</li>
					<li className="flex-row">
						<div>IT-121316</div>
						<div>This is a test IT issue</div>
						<div>pankaj.upadhyay</div>
						<div>In Progress</div>
					</li>
        */}
				</ul>
			</div>
		</div>
	);
}

export default App;
