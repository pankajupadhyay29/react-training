import React from "react";
interface BugProps {
    id: string;
    description: string;
    assignedTo: string;
    status: string;
}

function Bug(props: BugProps) {
  return <li className="flex-row">
    <div>{props.id}</div>
    <div>{props.description}</div>
    <div>{props.assignedTo}</div>
    <div>{props.status}</div>
  </li>;
}

export default Bug;
