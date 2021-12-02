import React, { useState } from "react";
import { Alert, Spinner, Button } from "react-bootstrap";
import { useListVals } from "react-firebase-hooks/database";
import { db } from "../util/firebaseConfig";
import axios from "axios";
const DeviceHistory = ({ deviceKey }) => {
  const [entries, loadingEntries, errorEntries] = useListVals(
    db.ref(`/entries/${deviceKey}`)
  );
  const displayTime = (seconds) => {
    const convertedSeconds = (seconds + 6 * 3600) * 1000;
    const time = new Date(convertedSeconds);
    console.log(seconds);
    return time.toLocaleString();
  };
  const [loadingReset, setLoading] = useState(false);
  const handleReset = () => {
    setLoading(true);
    axios
      .delete(
        `http://localhost:5000/entry-manager-dd8f9/us-central1/api/device/resetHistory/${deviceKey}`,
        {
          headers: {
            Headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          },
        }
      )
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };
  console.log(entries);
  if (loadingEntries)
    return (
      <div className="center-item">
        {" "}
        <Spinner animation="border" />{" "}
      </div>
    );
  if (errorEntries) return <Alert variant="danger"> Ocurrió un error </Alert>;
  if (!loadingEntries && !errorEntries) {
    if (entries.length === 0) {
      return (
        <div className="p-4">
          <div className="center-item">
            <Alert variant="dark">
              <div className="text-center">
                Aquí verás el historial de entradas, cuando haya
              </div>
            </Alert>
          </div>
        </div>
      );
    }
    return (
      <div
        className="bg-light   shadow"
        style={{
          maxHeight: "800px",
          overflow: "scroll",
          overflowX: "hidden",
        }}
      >
        <div
          onClick={handleReset}
          className={
            "btn btn-block btn-outline-danger m-2" +
            (loadingReset ? " disabled" : "")
          }
        >
          <div className="d-flex justify-content-center align-items-center">
            {loadingReset ? (
              <Spinner animation="grow" size="sm" className="mr-2" />
            ) : null}
            <div>Resetear historial</div>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Temperatura</th>
              <th scope="col">Tiempo</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entrie, index) => (
              <tr className="table-light text-dark" key={index}>
                <td>
                  <strong>{entrie.temperature}</strong>
                </td>
                <td> {displayTime(entrie.timeStamp)} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default DeviceHistory;
