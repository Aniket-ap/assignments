import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import DropDown from "./DropDown";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);
//   const classes = useRowStyles();

//   return <></>;
// }

const DataTable = ({ details }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <h3>Analysis on fundamental Changes</h3>
      {details.map((detail) => {
        return (
          <TableContainer component={Paper} key={detail.feature}>
            <Table aria-label="collapsible table">
              <TableBody>
                <DropDown detail={detail} />
              </TableBody>
            </Table>
          </TableContainer>
        );
      })}
    </>
  );
};

export default DataTable;

// import React from "react";

// const DataTable = ({ details }) => {
//   const renderData = details.map((detail) => {
//     return (
//       <table className="custom-table" key={detail.feature}>
//         <tbody>
//           <tr>
//             <td>{detail.feature}</td>
//             <td>{detail.description}</td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   });

//   return <div>{renderData}</div>;
// };

// export default DataTable;
