import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  ListGroup,
  Tab,
  Tabs,
} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import Chart from "react-apexcharts";
import "../components/badge/badge.css";
import "../assets/css/index.css";
import OnchoChart from "../components/charts/OnchoChart";
import SchistoChart from "../components/charts/SchistoChart";
import LfChart from "../components/charts/LfChart";
import HelminthsChart from "../components/charts/HelminthsChart";
import axios from "axios";
import List from "../components/List";

const DashboardScreen = () => {
  const [count, setCounts] = useState([]);
  // const [charts, setCharts] = useState([]);

  // useEffect(() => {
  //   const fetchCharts = async () => {
  //     const { data } = await axios.get("/api/chart/");
  //     // setCharts(data);
  //     console.log(data);
  //   };
  //   let isMounted = true; // note mutable flag
  //   fetchCharts().then((data) => {
  //     if (isMounted) setCharts(data);
  //     const series = [
  //       {
  //         name: "tests",
  //         data: [charts.chart],
  //       },
  //       //creat list of positive results and time and pass to chart
  //     ];
  //     const options = {
  //       xaxis: {
  //         categories: [charts.dates],
  //       },
  //     }; // add conditional check
  //   });
  //   series = series;
  //   options = options;
  //   return () => {
  //     isMounted = false;
  //     console.log(isMounted);
  //   };
  //   // fetchCharts();
  // }, []);
  // console.log("tesrs" + charts.chart);

  const fetchCounts = async () => {
    const { data } = await axios.get("/api/count/");
    setCounts(data);
    console.log(data);
  };
  useEffect(() => {
    fetchCounts();
  }, []);

  return (
    <Container fluid style={{ paddingLeft: "0px !important" }}>
      <div style={{ width: "100%", height: "300px" }}>
        <Tabs
          defaultActiveKey="oncho"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="oncho" title="Onchocerciasis">
            <OnchoChart />
          </Tab>
          <Tab eventKey="schisto" title="Schistosomiasis">
            <SchistoChart />
          </Tab>
          <Tab eventKey="lf" title="Lymphatic Filariasis">
            <LfChart />
          </Tab>
          <Tab eventKey="helminths" title="S.T. Hemlinths">
            <HelminthsChart />
          </Tab>
        </Tabs>
      </div>

      <Row>
        <Col>
          <List
            title=" onchocerciasis"
            tests={count.oTests}
            ptest={count.opTests}
            ntest={count.onTests}
          />
        </Col>
        <Col>
          <List
            title=" schistosomiasis"
            tests={count.sTests}
            ptest={count.spTests}
            ntest={count.snTests}
          />
        </Col>
        <Col>
          <List
            title=" l. filariasis"
            tests={count.lTests}
            ptest={count.lpTests}
            ntest={count.lnTests}
          />
        </Col>
        <Col>
          <List
            title="S. T. Helminths"
            tests={count.hTests}
            ptest={count.hpTests}
            ntest={count.hnTests}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardScreen;
