/**
 *
 */
import "./StatusContainer.scss";

/**
 * Status container.
 *
 * @see https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/
 */
const StatusContainer = (): JSX.Element => {
  return (
    <>
      <div className="flex-row flex w-100  items-center gray b">
        <div className="flex-column flex items-center mh3">
          <div className="circle"></div>
          <span className="center mv2 f6">UI</span>
        </div>
        <div className="flex flex-column mh3">
          <div className="arrow reverse mv2"></div>
          <div className="line mv2"></div>
        </div>
        <div className="flex-column flex items-center mh3 ">
          <div className="circle"></div>
          <span className="center mv2 f6">Broker</span>
        </div>
        <div className="flex flex-column mh3">
          <div className="line mv2"></div>
          <div className="line mv2"></div>
        </div>
        <div className="flex-column flex items-center mh3">
          <div className="circle"></div>
          <span className="center mv2 f6">Device</span>
        </div>
      </div>
    </>
  );
};

export { StatusContainer };
