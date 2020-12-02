import React from "react";
import Bug from "./Bug";

export interface IBug {
	id: string;
	description: string;
	createdBy: string;
	assignedTo: string;
	status: string; // "Open" | "On Hold" | "In Progress" | "Resolved" | "Closed"
}

interface IBugListProps {
	bugs: IBug[];
	onChangeStatus(id: string, status: string): void;
}
export default class BugList extends React.Component<IBugListProps> {
	constructor(props: IBugListProps) {
		super(props);
		console.log("BugList Component > constructor");
	}

	public static getDerivedStateFromProps() {
		console.log("BugList Component > getDerivedStateFromProps", arguments);
		return null;
	}

	public getSnapshotBeforeUpdate() {
		console.log("BugList Component > getSnapshotBeforeUpdate", arguments);
		return null;
	}

	public componentDidMount() {
		console.log("BugList Component > componentDidMount", arguments);
	}

	public componentDidUpdate() {
		console.log("BugList Component > componentDidUpdate", arguments);
	}

	public componentDidCatch() {
		console.log("BugList Component > componentDidCatch", arguments);
	}

	public componentWillUnmount() {
		console.log("BugList Component > componentWillUnmount", arguments);
	}

	public shouldComponentUpdate() {
		console.log("BugList Component > shouldComponentUpdate", arguments);
		return true;
	}

	public render() {
		console.log("BugList Component > render", arguments);
		const { bugs, onChangeStatus } = this.props;
		return (
			<ul className="list">
				<Bug
					id="Key"
					description="Summary"
					assignedTo="Assigned To"
					status="Status"
				/>
				{bugs.map((bug) => (
					<Bug key={bug.id} {...bug} onChangeStatus={onChangeStatus}></Bug>
				))}
			</ul>
		);
	}
}
