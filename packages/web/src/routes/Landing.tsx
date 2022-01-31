import { useState } from "react";
import { StatusContainer } from "@/components/StatusContainer";
import { SectionContainer } from "../components/Section/SectionContainer";

interface LandingProps {}

const Landing = ({}: LandingProps): JSX.Element => {
  return (
    <div className="center w-two-thirds mid-gray flex flex-column ">
      <SectionContainer header="MQTT Duplex Heartbeat over Broker PoC">
        <p>
          This demonstrates a proof of concept for UI connection heartbeats
          between a device and UI across a broker. Both heartbeats to the broker
          are duplex. The circles
        </p>
      </SectionContainer>
      <SectionContainer header="Connection Status">
        <StatusContainer>
        </StatusContainer>
      </SectionContainer>
      <SectionContainer header="Key">
        <div>
          asdf
        </div>
      </SectionContainer>
      <SectionContainer header="Messages">
        <Table
      </SectionContainer>
      <SectionContainer header="Info"></SectionContainer>
    </div>
  );
};

export { Landing };
