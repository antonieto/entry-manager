import React from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useObjectVal } from "react-firebase-hooks/database";
import { db } from "../util/firebaseConfig";

const DeviceHistory = ({ deviceKey }) => {
  const [entries, loadingEntries, errorEntries] = useObjectVal(
    db.ref(`/entries/${deviceKey}`)
  );

  if (loadingEntries)
    return (
      <div className="center-item">
        {" "}
        <Spinner animation="border" />{" "}
      </div>
    );
  if (errorEntries) return <Alert variant="danger"> Ocurrió un error </Alert>;
  if (!loadingEntries && !errorEntries) {
    return (
      <div
        className="bg-light   shadow"
        style={{
          maxHeight: "800px",
          overflow: "scroll",
          overflowX: "hidden",
        }}
      >
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
                  <strong>{entrie.temperatura}</strong>
                </td>
                <td> {entrie.timeStamp} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default DeviceHistory;
