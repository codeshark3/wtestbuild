import React, { useState, useEffect } from "react";
import { Card, Table, Button, Pagination, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";
import ReactExport from "react-data-export";
import "../assets/css/index.css";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelSheet;

const TestsScreen = () => {
  const [tests, setTests] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["id", "name"]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchTests = async () => {
      const { data } = await axios.get("/api/tests/");

      setTests(data);
    };

    fetchTests();
  }, []);

  const Dataset = [
    {
      columns: [
        {
          title: " Id",
          style: { font: { sz: "16", bold: true } },
          width: { wpx: 125 },
        },
        {
          title: " Name",
          style: { font: { sz: "16", bold: true } },
          width: { wpx: 125 },
        },
        {
          title: " Age",
          style: { font: { sz: "16", bold: true } },
          width: { wpx: 125 },
        },
        {
          title: " Gender",
          style: { font: { sz: "16", bold: true } },
          width: { wpx: 125 },
        },
        {
          title: "Location",
          style: { font: { sz: "16", bold: true } },
          width: { wpx: 125 },
        },
        {
          title: " Onchocerciasis",
          style: { font: { sz: "16", bold: true } },
          width: { wpx: 125 },
        },
        {
          title: " Schistosomiasis",
          style: { font: { sz: "16", bold: true } },
          width: { wpx: 125 },
        },
        {
          title: "L.F.",
          style: { font: { sz: "16", bold: true } },
          width: { wpx: 125 },
        },
        {
          title: "  S.T. Helminths",
          style: { font: { sz: "16", bold: true } },
          width: { wpx: 125 },
        },
      ],
      data: search(tests).map((test) => [
        { value: test.id, style: { font: { sz: "14" } } },
        { value: test.name, style: { font: { sz: "14" } } },
        { value: test.age, style: { font: { sz: "14" } } },
        { value: test.sex, style: { font: { sz: "14" } } },
        { value: test.location, style: { font: { sz: "14" } } },
        { value: test.oncho, style: { font: { sz: "14" } } },
        { value: test.schisto, style: { font: { sz: "14" } } },
        { value: test.lf, style: { font: { sz: "14" } } },
        { value: test.helminths, style: { font: { sz: "14" } } },
      ]),
    },
  ];
  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }
  return (
    <div>
      <Form inline>
        <Form.Control
          placeholder="Search for..."
          type="text"
          name="q"
          onChange={(e) => setQ(e.target.value)}
          value={q}
          className="mr-sm-2 ml-sm-5"
        ></Form.Control>
      </Form>
      <Table
        striped
        bordered
        hover
        responsive
        className="table-sm"
        id="excel-export"
      >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">age</th>
            <th scope="col">Gender</th>
            <th scope="col">Location</th>
            <th scope="col">Onchocerciasis</th>
            <th scope="col">Schistosomiasis</th>
            <th scope="col">lf</th>
            <th scope="col">s.T. Helminths</th>
          </tr>
        </thead>
        <tbody>
          {search(tests).map((test) => (
            <LinkContainer to={`/test/${test.id}`}>
              <tr key={test.id}>
                <td> {test.id}</td>
                <td> {test.name}</td>
                <td> {test.age}</td>
                <td> {test.sex}</td>
                <td> {test.location}</td>
                <td> {test.oncho}</td>
                <td> {test.schisto}</td>
                <td> {test.lf}</td>
                <td> {test.helminths}</td>
              </tr>
            </LinkContainer>
          ))}
          {/* <Pagination bsSize="medium" items={10} activePage={page} /> */}
        </tbody>
      </Table>

      <ExcelFile
        filename="Watertest"
        element={
          <Button className="btn btn-block bg-primary"> Export to Excel</Button>
        }
      >
        <ExcelSheet dataSet={Dataset} name="WaterTest" />
      </ExcelFile>
    </div>
  );
};

export default TestsScreen;
