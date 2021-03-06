import React, { useState, useEffect } from "react";

// Components
import Loading from "../Loading";

// Styles
import { Table, TableHeading, TableData } from "./styles";

// Types
import { dataType } from "../../types";

// Assets
import crossImage from "../../images/cross.png";

const baseUrl = process.env.REACT_APP_BASE_URL;

function deleteWord(
  event: React.MouseEvent,
  json: dataType[],
  setJson: React.Dispatch<React.SetStateAction<dataType[]>>
) {
  let id = event.currentTarget.parentElement?.parentElement?.dataset.id;
  const url = baseUrl + "remove/" + id;
  fetch(url, {
    method: "delete",
  });
  setJson(json.filter((el) => el.id !== Number(id)));
}

export default function Learn() {
  let [json, setJson] = useState<dataType[]>([]);
  useEffect(() => {
    fetch(baseUrl + "learn")
      .then((resp) => resp.json())
      .then((json) => setJson(json))
      .catch((err) => console.error(err));
  }, []);
  console.log(json);

  if (!json.length) {
    return <Loading />;
  }
  return (
    <Table>
      <thead>
        <tr>
          <TableHeading>
            <h3>Type</h3>
          </TableHeading>
          <TableHeading>
            <h3>Word</h3>
          </TableHeading>
          <TableHeading>
            <h3>Translation</h3>
          </TableHeading>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {json.map((el) => (
          <tr key={el.id} data-id={el.id}>
            <TableData>{el.type}</TableData>
            <TableData>{el.word}</TableData>
            <TableData>{el.translation}</TableData>
            <td>
              <img
                src={crossImage}
                alt="cross"
                style={{ width: "20px", cursor: "pointer" }}
                onClick={(e) => deleteWord(e, json, setJson)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
