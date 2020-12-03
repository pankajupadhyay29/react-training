import React from "react";
function label(props: any) {
  return (
    <div style={{ fontWeight: "bold", margin: "4px 0px" }}>
      {props.children}
    </div>
  );
}

export default label;
