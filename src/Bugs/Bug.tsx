import React from 'react';

interface IBugProps {
    id: string;
    description: string;
    assignedTo: string;
    status: string;
}

function Bug(props: IBugProps) {
    const { id, description, assignedTo, status } = props;
    return <li className="flex-row">
        <div>{id}</div>
        <div>{description}</div>
        <div>{assignedTo}</div>
        <div>{status}</div>
    </li>
}

export default Bug;