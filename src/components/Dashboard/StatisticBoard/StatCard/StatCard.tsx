import { Grid, Paper } from "@mui/material";
import { Abonnements, Amount, Bto, CardHeader, Tendance } from ".";

interface StatCardProps {
  stat: [
    string,
    {
      amount: {
        amount: number;
        price: boolean;
      };
      tendency: string;
      B2B: null | undefined | number;
      B2C: null | undefined | number;
      "Nombre d'abonnements"?: number;
    }
  ];
}

const StatCard = ({ stat }: StatCardProps) => {
  const cardStyle = {
    height: "240px",
    width: "215px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    bgcolor: "#FFF",
    p: 2.5,
    borderRadius: "15px",
  };

  const boxAmountStyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const boxBtoStyle = {
    display:
      stat[1].B2C !== undefined || stat[1].B2B !== undefined ? "flex" : "none",
    width: "100%",
  };
  return (
    <Paper elevation={2} sx={cardStyle}>
      <CardHeader title={stat[0]} />
      {stat[1].hasOwnProperty("Nombre d'abonnements") && (
        <Abonnements abo={stat[1]["Nombre d'abonnements"]} />
      )}
      <Grid container direction={"column"} rowGap={0.75}>
        <Grid item sx={boxAmountStyle}>
          <Amount amount={stat[1].amount} />
          <Tendance tendency={stat[1].tendency} />
        </Grid>
        <>
          {stat[1] && (
            <Grid item sx={boxBtoStyle}>
              {stat[1].B2C !== undefined && (
                <Bto name={"B2C"} bto={stat[1].B2C} />
              )}
              {stat[1].B2B !== undefined && (
                <Bto name={"B2B"} bto={stat[1].B2B} />
              )}
            </Grid>
          )}
        </>
      </Grid>
    </Paper>
  );
};

export default StatCard;
