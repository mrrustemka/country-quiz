import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "@mui/material";
import { Breadcrumbs } from "@mui/material";
// import Link from "@mui/material/Link";

function Start() {
  return (
    <div>
      {/* <Link>Start</Link> */}
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/question">
          Start
        </Link>
      </Breadcrumbs>
    </div>
  );
}

export default Start;
