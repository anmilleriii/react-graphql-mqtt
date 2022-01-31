import { useState } from "react";
import { StatusContainer } from "@/components/Status/StatusContainer";
import { SectionContainer } from "@/components/Section/SectionContainer";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

interface LandingProps {}

const Landing = ({}: LandingProps): JSX.Element => {
  return (
    <div className="flex flex-column ">
      <SectionContainer header="MQTT Duplex Heartbeat over Broker PoC">
        <p>
          This demonstrates a proof of concept for UI connection heartbeats
          between a device and UI across a broker. Both heartbeats to the broker
          are duplex. The circles
        </p>
      </SectionContainer>
      <SectionContainer header="Connection Status">
        <StatusContainer></StatusContainer>
      </SectionContainer>
      <SectionContainer header="Key">
        <div>asdf</div>
      </SectionContainer>
      <SectionContainer header="Messages">
        <Grid
          data={[
            ["John", "john@example.com"],
            ["Mike", "mike@gmail.com"],
          ]}
          columns={["Name", "Email"]}
          search={true}
          pagination={{
            enabled: true,
            limit: 1,
          }}
        />
      </SectionContainer>
      <SectionContainer header="Info"></SectionContainer>
    </div>
  );
};

export { Landing };
