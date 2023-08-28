import { SearchOutlined } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../store";

const Tableau = () => {
  const { clients } = useSelector((state: RootState) => state.clients);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const visibleRows = useMemo(
    () => clients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [clients, page, rowsPerPage]
  );

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - clients.length) : 0;

  const handleChangePage = (e: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const TableToolbar = () => {
    return (
      <Toolbar sx={{ pb: 2 }}>
        <Grid item container columnGap={3} sx={{ alignItems: "center" }}>
          <Grid item sx={{ fontWeight: 700 }}>
            {clients.length} résultats
          </Grid>
          <Grid item>
            <Paper
              component="form"
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                p: "8px",
                border: `1px solid ${grey[400]}`,
              }}
            >
              <SearchOutlined
                sx={{ color: grey[400], transform: "translateY(-1px)" }}
              />
              <InputBase size="small" placeholder={"Rechercher par"} />
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              component="form"
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                p: "8px",
                border: `1px solid ${grey[400]}`,
              }}
            >
              <InputBase size="small" placeholder={"Trier par: Tout"} />
            </Paper>
          </Grid>
        </Grid>
      </Toolbar>
    );
  };

  const TableHeader = () => {
    const columns = ["Nom", "Borne choisie", "Devis", "Étape", "Action"];

    return (
      <TableHead>
        <TableRow>
          {columns.map((col, i) => (
            <TableCell
              key={i}
              align="center"
              padding={col === "Nom" ? "none" : "normal"}
              sx={{
                color: grey[500],
                borderTop: `1px solid ${grey[300]}`,
                width: col === "Action" ? 150 : "auto",
              }}
            >
              {col}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2, pt: 2 }}>
        <TableToolbar />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} size={"medium"}>
            <TableHeader />
            <TableBody>
              {visibleRows.map((row: any, i: number) => {
                return (
                  <TableRow
                    hover
                    onClick={() => navigate(`${pathname}/${row.nom}`)}
                    key={i}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell
                      component="th"
                      id={row.nom}
                      scope="row"
                      padding="none"
                      align="center"
                      sx={{ fontWeight: 500 }}
                    >
                      {row.nom}
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: 500 }}>
                      Borne Modèle {row.borne}
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: 500 }}>
                      {row.devis ?? "###"}
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: 500 }}>
                      Étape {row.etape}
                    </TableCell>
                    <TableCell align="center" padding="none">
                      <IconButton>
                        <EditIcon sx={{ color: "secondary.main" }} />
                      </IconButton>
                      <IconButton>
                        <DeleteIcon sx={{ color: "secondary.main" }} />
                      </IconButton>
                      <IconButton>
                        <MoreVertIcon sx={{ color: "secondary.main" }} />
                      </IconButton>
                    </TableCell>
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
          count={clients.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage={"Lignes par page:"}
          sx={{
            ".MuiTablePagination-displayedRows, .MuiTablePagination-selectLabel":
              {
                fontWeight: 700,
              },
          }}
        />
      </Paper>
    </Box>
  );
};

export default Tableau;
