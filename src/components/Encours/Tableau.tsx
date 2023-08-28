import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";

const Tableau = () => {
  const [rows, setRows] = useState([]);

  const getData = async () => {
    const res = await fetch("https://dummyjson.com/users");
    const { users } = await res.json();
    setRows(users);
  };

  useEffect(() => {
    getData();
  }, []);

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const visibleRows = Array(rowsPerPage);
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (e: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            {/* <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            /> */}
            <TableBody>
              {visibleRows.map((row, i) => {
                // const isItemSelected = isSelected(row.name);
                // const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    // onClick={(e) => handleClick(e, row.name)}
                    role="checkbox"
                    // aria-checked={isItemSelected}
                    // selected={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    sx={{ cursor: "pointer" }}
                  >
                    {/* <TableCell
                      component="th"
                      id={i}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell> */}
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage={"Lignes par page"}
        />
      </Paper>
    </Box>
  );
};

export default Tableau;
