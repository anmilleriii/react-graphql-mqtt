import { useState } from "react";
import { SectionContainer } from "../components/Section/SectionContainer";
import { StatusContainer } from "../components/Status/StatusContainer";
import { KeyContainer } from "../components/Key/KeyContainer";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

interface LandingProps {}

const Landing = ({}: LandingProps): JSX.Element => {
  return (
    <div className="flex flex-column justify-between">
      {/* <SectionContainer header="Connection Status">
        <StatusContainer />
      </SectionContainer> */}
      {/* <SectionContainer header="Message Log">
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
      <SectionContainer header="Key">
        <KeyContainer />
      </SectionContainer> */}
      {/* <SectionContainer header="Info"></SectionContainer> */}
    </div>
  );
};

export { Landing };
