import React from "react";
import DatamapsIndia from "react-datamaps-india";

const MapChart = () => {
  return (
    <div>
    <DatamapsIndia
      regionData={{
        ['Jammu & Kashmir']: {
          value: 600
        },
        Odisha: {
          value: 10
        },
        Gujarat: {
          value: 800
        },
        // Karnataka: {
        //   value: 700
        // },
        ['Tamil Nadu']: {
          value: 200
        },
        // Kerala: {
        //   value: 890
        // }
      }}
      hoverComponent={({ value }) => {
        return (
          <div>
            <div><p>{value.name}</p>
              <p>{value.value}</p></div>

          </div>
        );
      }}
      mapLayout={{
        // title: "Statewise",
        // legendTitle: "Number of Tenders",
        // startColor: "#FFDAB9",
        // endColor: "#FF6347",
        // hoverTitle: "Count",
        // noDataColor: "#f5f5f5",
        // borderColor: "#8D8D8D",
        // hoverBorderColor: "#8D8D8D",
        // hoverColor: "green",
        // height: 70,
        // weight: 30
        title: '',
        legendTitle: '',
        startColor: 'blue',
        endColor: 'red',
        hoverTitle: 'Count',
        noDataColor: '#f5f5f5',
        borderColor: '#8D8D8D',
        hoverColor: 'green',
        hoverBorderColor: 'green',
      }}
    />
    </div>
  );
};

export default MapChart;
