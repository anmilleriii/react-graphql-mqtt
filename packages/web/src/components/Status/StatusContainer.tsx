/**
 *
 */
import classNames from "classnames";
import "./StatusContainer.scss";

/**
 * Logic
 *
 *
 * connection
 */
// const uiToBrokerIsConnected = true;
// const uiToBrokerIsConnected = true;

// var btnClass = classNames("btn", this.props.className, {
//   "btn-pressed": this.state.isPressed,
//   "btn-over": !this.state.isPressed && this.state.isHovered,
// });

/**
 * Status container.
 *
 * @see https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/
 */

// type EntityStatus = ""

enum EntityStatus {
  UNKNOWN,
  HEALTHY,
  UNHEALTHY,
}

type EntityStatusEnum = keyof typeof EntityStatus;
interface Entity {
  connected?: boolean;
  status: EntityStatusEnum;
}

interface Entities {
  [key: string]: Entity;
}

const StatusContainer = (): JSX.Element => {
  const statuses: Entities = {
    ui: {
      connected: false,
      status: "UNKNOWN",
    },
    broker: {
      status: "HEALTHY",
    },
    device: {
      connected: true,
      status: "UNHEALTHY",
    },
  };

  const statusStyles = {
    HEALTHY: "positive",
    UNHEALTHY: "negative",
    UNKNOWN: "",
  };

  // const connectionStyles = {
  //   HEALTHY: "positive",
  //   UNHEALTHY: "negative",
  //   UNKNOWN: "",
  // };

  return (
    <>
      <div className="flex-row-l flex-column-m flex-column flex items-center gray b mt4" >
        <div className="flex-column flex items-center justify-center  ">
          <div className="dt w4">
            <div
              className={classNames(
                "h4 br-100 bg-gray",
                statusStyles[statuses.ui.status]
              )}
            ></div>
          </div>
          <span className="center mv2 f6">UI</span>
        </div>
        <div className="flex flex-column mh3">
          <div
            className={classNames(
              "h3 w1 h3-m w1-m h1-ns w3-ns mv2",
              statuses.ui.connected ? "positive" : "negative"
              )}
          ></div>
              <div className="mv2"></div>
        </div>
        <div className=" flex-column flex ">
          <div className="dt w4">
            <div
              className={classNames(
                "h4 br-100 bg-gray",
                statusStyles[statuses.broker.status]
              )}
            ></div>
          </div>
          <span className="center mv2 f6">Broker</span>
        </div>
        <div className="flex flex-column mh3">
          <div
            className={classNames(
              "h3 w1 h3-m w1-m h1-ns w3-ns mv2",
              statuses.device.connected ? "positive" : "negative"
            )}
          ></div>
          <div className="mv2"></div>
        </div>
        <div className="flex-column flex">
          <div className="dt w4">
            <div
              className={classNames(
                "h4 br-100 bg-gray",
                statusStyles[statuses.device.status]
              )}
            ></div>
          </div>
          <span className="center mv2 f6 ">Device</span>
        </div>
      </div>
    </>
  );
};

export { StatusContainer };
