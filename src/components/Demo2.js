import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(id, name, gender, age, mobile,location) {
  return {id, name, gender, age, mobile,location };
}

const rows = [
  createData(1,"adnan","male", 25, 1234567890,"hyderabad"),
  createData(2,"shariff","male", 26, 1234567890,"bangalore"),
  createData(3,"mohammad","female", 27, 1234567890,"kolkata"),
  createData(4,"shariff","male", 28, 1234567890,"mangalore"),
  createData(5,"random","male", 29, 1234567890,"chennai"),
  createData(6,"random","male", 30, 1234567890,"mumbai"),
];

export default function Demo2() {
  return (
    
    <div>
        <h3 align="center">Employee Information</h3>
    <TableContainer component={Paper}>
      <Table width="100%" aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell >Name</StyledTableCell>
            <StyledTableCell >Gender</StyledTableCell>
            <StyledTableCell >Age</StyledTableCell>
            <StyledTableCell >Mobile no</StyledTableCell>
            <StyledTableCell >Location</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id} align="center">
              <StyledTableCell >{row.id}</StyledTableCell>
              <StyledTableCell >{row.name}</StyledTableCell>
              <StyledTableCell >{row.gender}</StyledTableCell>
              <StyledTableCell >{row.age}</StyledTableCell>
                <StyledTableCell >{row.mobile}</StyledTableCell>
                <StyledTableCell >{row.location}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}