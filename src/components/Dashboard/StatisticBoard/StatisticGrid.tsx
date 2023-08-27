import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { StatCard } from "./StatCard";

const StatisticGrid = () => {
  const statistics = useSelector((state: RootState) => state.statistic);
  const stats = Object.entries(statistics);

  return (
    <Grid
      container
      columnGap={2}
      rowGap={2}
      sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
    >
      {stats.map((stat, i) => (
        <Grid item key={i}>
          <StatCard stat={stat} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StatisticGrid;
