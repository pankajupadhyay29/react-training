import React from "react";

interface IBugProps {
	id: string;
	description: string;
	assignedTo: string;
	status: string;
	onChangeStatus?(id: string, status: string): void;
}

function Bug(props: IBugProps) {
	const { id, description, assignedTo, status, onChangeStatus } = props;
	return (
		<li className="flex-row">
			<div>{id}</div>
			<div>{description}</div>
			<div>{assignedTo}</div>
			<div>
				{onChangeStatus ? (
					<select
						value={status}
						onChange={(event) => onChangeStatus(id, event.target.value)}
					>
						<option value="Open">Open</option>
						<option value="In Progress">In Progress</option>
						<option value="On Hold">On Hold</option>
						<option value="Resolved">Resolved</option>
						<option value="Closed">Closed</option>
					</select>
				) : (
					status
				)}
			</div>
		</li>
	);
}

export default Bug;
