import "hammerjs";
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartXAxis,
  ChartXAxisItem,
  ChartYAxis,
  ChartYAxisItem,
  ChartArea,
  ChartTooltip,
  ChartSeriesItemTooltip,
  ChartValueAxisCrosshairTooltip,
} from "@progress/kendo-react-charts";
import { data } from "../constants";
import { Grid, Typography } from "@mui/material";
const dayLabels: { [index: number]: string } = {
  1: "Mon",
  3: "Wed",
  5: "Fri",
};
const monthLabels: { [index: number]: string } = {
  1: "Jul",
  4: "Aug",
  7: "Sep",
  10: "Oct",
  13: "Nov",
  16: "Dec",
  19: "Jan",
  22: "Feb",
  25: "Mar",
  28: "April",
  31: "May",
  34: "Jun",
};
export const Heatmap = () => {
  console.log("data: ", data);

  const yAxisLabelContent = (e: any) => {
    return dayLabels[e.value] || "";
  };
  const xAxisLabelContent = (e: any) => {
    return monthLabels[e.value] || "";
  };

  return (
    <Grid>
      <Typography variant="h6" sx={{ color: "#d3d8db" }}>
        contributions in the last year
      </Typography>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          border: "1px solid #fff",
          p: 2,
        }}
      >
        {/* <Chart
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "100%",
          }}
        >
          <ChartTooltip />
          <ChartArea background="transparent" height={250} />

          <ChartSeries>
            <ChartSeriesItem
              type="heatmap"
              data={data}
              color="#216e39"
              labels={{ visible: false }}
              markers={{ type: "roundedRect", border: { width: 2 } }}
            />
          </ChartSeries>
          <ChartXAxis>
            <ChartXAxisItem
              reverse={false}
              color="#fff"
              line={{ visible: false }}
              labels={{ content: xAxisLabelContent }}
            />
          </ChartXAxis>
          <ChartYAxis>
            <ChartYAxisItem
              reverse
              color="#fff"
              line={{ visible: false }}
              labels={{ content: yAxisLabelContent }}
            />
          </ChartYAxis>
        </Chart> */}
        <img width="100%" src="https://ghchart.rshah.org/usmangq12" />
      </Grid>
    </Grid>
  );
};
