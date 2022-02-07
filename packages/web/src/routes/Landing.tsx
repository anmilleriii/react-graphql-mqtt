import { useState } from "react";
import { SectionContainer } from "../components/Section/SectionContainer";
import { StatusContainer } from "../components/Status/StatusContainer";
import { KeyContainer } from "../components/Key/KeyContainer";
import { Grid } from "gridjs-react";

import { useGetPostsQuery } from "../../../server/types/generated/client-types";

interface LandingProps {}

const columns = ["topic", "message", "timestamp"];

interface MqttMessage {
  topic: string;
  data: string;
  timestamp: string;
}
const messages: MqttMessage[] = [
  {
    topic: "/asdf/asdf",
    data: "{asdf: asdf}",
    timestamp: "23refdd",
  },
  {
    topic: "/asdf/asdf",
    data: "{asdf: asdf}",
    timestamp: "23refdd",
  },
  {
    topic: "/asdf/asdf",
    data: "{asdf: asdf}",
    timestamp: "23refdd",
  },
  {
    topic: "/asdf/asdf",
    data: "{asdf: asdf}",
    timestamp: "23refdd",
  },
  {
    topic: "/asdf/asdf",
    data: "{asdf: asdf}",
    timestamp: "23refdd",
  },
  {
    topic: "/asdf/asdf",
    data: "{asdf: asdf}",
    timestamp: "23refdd",
  },
  {
    topic: "/asdf/asdf",
    data: "{asdf: asdf}",
    timestamp: "23refdd",
  },
];

const Landing = ({}: LandingProps): JSX.Element => {
  // const { data } = useGetPostsQuery();

  return (
    <div className="flex flex-column justify-between">
      <SectionContainer header="Connection Status">
        <StatusContainer />
      </SectionContainer>
      <SectionContainer header="Message Log">
        <table className="table w-100 tl">
          <thead>
            {columns.map((column) => (
              <th className="w-third-ns pb2 tc">{column}</th>
            ))}
          </thead>
          <tbody>
            {messages.map(({ topic, data, timestamp }) => (
              <tr className="gray striped--near-white">
                <td>{topic}</td>
                <td>{data}</td>
                <td>{timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionContainer>
      {/* <SectionContainer header="Key">
        <KeyContainer />
      </SectionContainer> */}
    </div>
  );
};

export { Landing };
