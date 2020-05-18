import React from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";


// Resolves charts dependancy    
charts(FusionCharts);

  
  class ChartComponent extends React.Component {

    constructor(props){
        super();
        this.props = props;
    }
    
    render() {
        const dataSource = {
            chart: {
              showpercentvalues: "1",
              defaultcenterlabel: "Sentiment Distribution",
              aligncaptionwithcanvas: "0",
              captionpadding: "0",
              decimals: "1",
              plottooltext:
                "<b>$percentValue</b> of tweets are <b>$label</b>",
              centerlabel: "# tweets: $value",
              theme: "gammel"
            },
            data: this.props.data,
          };
      return (
        <ReactFusioncharts
          type="doughnut2d"
          width="100%"
          height="100%"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      );
    }
  }


export default ChartComponent;