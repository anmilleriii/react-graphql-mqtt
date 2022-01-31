// import "./KeyContainer.css";
import "./KeyContainer.css";
import classNames from "classnames";

// Create a Title component that'll render an <h1> tag with some styles
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

// // Create a Wrapper component that'll render a <section> tag with some styles
// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

interface KeyContainerProps extends Props {}

export const KeyContainer = ({}: KeyContainerProps): JSX.Element => {
  return (
    <>
      <div className="flex-column flex w-50-ns tr">
        <div className="flex flex-row items-center justify-between ">
          <label>Connected</label>
          <div className="circle positive sm mv3"></div>
        </div>
        <div className="flex flex-row items-center justify-between ">
          <label>Not connected</label>
        <div className="circle negative sm mv3"></div>
        </div>
        <div className="flex flex-row items-center justify-between ">
          <label>Unknown status</label>
        <div className="circle neutral sm mv3"></div>
        </div>
        <div className="flex flex-row items-center justify-between ">
          <label>Alive</label>
        <div className="arrow special mv3"></div>
        </div>
        <div className="flex flex-row items-center justify-between ">
          <label>Dead</label>
        <div className="line mv3"> </div>
        </div>
      </div>
    </>
  );
};
