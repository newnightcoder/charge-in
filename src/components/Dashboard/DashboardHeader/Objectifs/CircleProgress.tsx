import { styled, Typography } from "@mui/material";

interface CircleProgressProps {
  percent: number;
}

const CircleSvg = styled("svg")(({ theme }) => ({
  height: "100px",
  width: "100px",
}));

const Circle = styled("circle")({
  strokeWidth: 15,
  fill: "none",
});

const CircleProgress = ({ percent }: CircleProgressProps) => {
  const circleRadius = 42.5;
  const perimeter = 2 * Math.PI * circleRadius;
  const offset = perimeter - (percent / 100) * perimeter;

  return (
    <CircleSvg>
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop stopColor="#8BDFDA" offset={"0%"} />
          <stop stopColor="#369C96" offset={"100%"} />
        </linearGradient>
      </defs>
      <Circle stroke="#0F1959" cx="50" cy="50" r={circleRadius} />
      <circle
        stroke={`url(#gradient)`}
        cx="50"
        cy="50"
        r={circleRadius}
        strokeWidth="15"
        fill="none"
        strokeDasharray={`${perimeter} ${perimeter}`}
        strokeDashoffset={offset}
        transform="rotate(-90, 50, 50)"
      />
      <foreignObject x="0" y="0" height="100" width="100">
        <div
          style={{
            height: "100%",
            width: "auto",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Typography fontSize={"1rem"} color={"#FFF"}>
            {percent}%
          </Typography>
        </div>
      </foreignObject>
    </CircleSvg>
  );
};

export default CircleProgress;
