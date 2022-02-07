import { useState } from "react";
import { SectionContainer } from "../components/Section/SectionContainer";
import { StatusContainer } from "../components/Status/StatusContainer";
import { MessageLogContainer } from "../components/MessageLog/MessageLogContainer";
import { KeyContainer } from "../components/Key/KeyContainer";
import { Grid } from "gridjs-react";
import { useGetPostsQuery,  } from "../../../server/types/generated/client-types";

interface LandingProps {}


const Landing = ({}: LandingProps): JSX.Element => {
  return (
    <div className="flex flex-column justify-between">
      <SectionContainer header="Connection Status">
        <StatusContainer />
      </SectionContainer>
      <SectionContainer header="Message Log">
        <MessageLogContainer />
      </SectionContainer>
    </div>
  );
};

export { Landing };
