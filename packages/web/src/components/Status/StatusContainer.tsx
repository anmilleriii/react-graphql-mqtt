/**
 *
 */
import "./StatusContainer.css";
interface StatusProps extends Props {}

/**
 * Status container.
 *
 * @see https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/
 */
export const StatusContainer = ({}: StatusProps): JSX.Element => {
  return (
    <>
      <div className="flex-row flex w-100 justify-around items-center gray b">
        <div className="flex-column flex items-center ">
          <span className="center mv2 f6">UI</span>
          <div className="circle"></div>
        </div>
        <div className="self-end">
          <div className="arrow reverse mv2"></div>
          <div className="arrow "></div>
        </div>
        <div className="flex-column flex items-center ">
          <span className="center mv2 f6">Broker</span>
          <div className="circle"></div>
        </div>
        <div className="self-end">
          <div className="arrow reverse"></div>
          <div className="arrow "></div>
        </div>
        <div className="flex-column flex items-center ">
          <span className="center mv2 f6">Device</span>
          <div className="circle"></div>
        </div>
      </div>
    </>
  );
};
