interface MessageLogContainerProps {}

interface MqttMessage {
  topic: string;
  data: string;
  timestamp: string;
}

const columns = ["topic", "message", "timestamp"];
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

const MessageLogContainer = ({}: MessageLogContainerProps): JSX.Element => {
  return (
    <>
      <table className="table w-100 tl">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="w-third-ns pb2 tc">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {messages.map(({ topic, data, timestamp }, index) => (
            <tr key={index} className="gray striped--near-white">
              <td>{topic}</td>
              <td>{data}</td>
              <td>{timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export { MessageLogContainer };
