import React from "react";
import Label from "../Label";
interface BugProps {
  id: string;
  description: string;
  assignedTo: string;
  status: string;
  onChangeStatus?: (id: string, status: string) => void;
}

function Bug(props: BugProps) {
  const { onChangeStatus } = props;
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if(props.onChangeStatus) props.onChangeStatus(props.id, event.target.value)
  }
  return (
    <li className="flex-row">
      <Label style={{fontWeight: 'bold', margin: '4px 0px'}}>{props.id}</Label>
      <Label>{props.description}</Label>
      <Label>{props.assignedTo}</Label>
      <Label>
        {onChangeStatus ? (
          <select
            value={props.status}
            onChange={onChange}
          >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="On Hold">On Hold</option>
            <option value="Resolved">Resolved</option>
            <option value="Closed">Closed</option>
          </select>
        ) : (
          props.status
        )}
      </Label>
    </li>
  );
}

export default Bug;
