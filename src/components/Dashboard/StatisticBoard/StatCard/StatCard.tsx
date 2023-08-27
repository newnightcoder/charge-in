import { Box, Paper, Typography } from "@mui/material";
import { green, grey, red } from "@mui/material/colors";

interface StatCardProps {
  stat: [
    string,
    {
      amount: number;
      tendency: string;
      price: boolean;
      B2B: null | undefined | number;
      B2C: null | undefined | number;
      "Nombre d'abonnements"?: number;
    }
  ];
}

const StatCard = ({ stat }: StatCardProps) => {
  return (
    <Paper
      elevation={2}
      sx={{
        height: "250px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        bgcolor: "white.main",
        p: 2,
        borderRadius: "15px",
      }}
    >
      <Typography
        variant="subtitle1"
        color={grey[500]}
        width={stat[0].includes("en cours") ? "12ch" : "16ch"}
        lineHeight={"1.3rem"}
      >
        {stat[0]}
      </Typography>

      <>
        {stat[1].hasOwnProperty("Nombre d'abonnements") && (
          <Box>
            <Typography variant="subtitle1" fontSize=".8rem" color={grey[500]}>
              Nombre d'abonnements
            </Typography>
            <Typography fontSize=".8rem" fontWeight={700} lineHeight="1rem">
              {
                (stat[1] as { "Nombre d'abonnements": number })[
                  "Nombre d'abonnements"
                ]
              }
            </Typography>
          </Box>
        )}
      </>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          fontWeight={700}
          fontSize={"1.75rem"}
          sx={{
            "&:after": {
              content: '"HT"',
              display: stat[1].price ? "inline-block" : "none",
              position: "relative",
              top: "-5px",
              right: "-10px",
              color: grey[500],
              fontSize: ".85rem",
              fontWeight: 500,
            },
          }}
        >{`${stat[1].amount}${stat[1].price ? "€" : ""}`}</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            color: stat[1].tendency.includes("+")
              ? green[500]
              : stat[1].tendency.includes("-")
              ? red[500]
              : grey[500],
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "1.5rem",
              transform: `${
                stat[1].tendency.includes("+")
                  ? "rotate(-90deg)"
                  : stat[1].tendency.includes("-")
                  ? "rotate(90deg)"
                  : ""
              }`,
            }}
          >
            {stat[1].tendency.includes("+") ||
            stat[1].tendency.includes("-") ? (
              <>&gt;</>
            ) : (
              <>=</>
            )}
          </span>
          <Typography width={"auto"}>{stat[1].tendency}</Typography>
        </Box>
      </Box>

      <>
        {stat[1] && (
          <Box
            sx={{
              display:
                stat[1].B2C !== undefined || stat[1].B2B !== undefined
                  ? "flex"
                  : "none",
              width: "100%",
            }}
          >
            {stat[1].B2C !== undefined && (
              <Box sx={{ width: "50%" }}>
                <Typography>B2C</Typography>
                <Typography>
                  {stat[1].B2C ? stat[1].B2C + "€ HT" : "##"}
                </Typography>
              </Box>
            )}
            {stat[1].B2B !== undefined && (
              <Box sx={{ width: "50%" }}>
                <Typography>B2B</Typography>
                <Typography>
                  {stat[1].B2B ? stat[1].B2B + "€ HT" : "##"}
                </Typography>
              </Box>
            )}
          </Box>
        )}
      </>
    </Paper>
  );
};

export default StatCard;
