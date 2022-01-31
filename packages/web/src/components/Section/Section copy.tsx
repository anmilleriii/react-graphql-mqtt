/**
 *
 */
interface StatusProps extends Props {}

/**
 * Status container.
 *
 * @see https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/
 */
export const StatusContainer = ({ children }: StatusProps): JSX.Element => {
  return (
    <>
      <div className="gray underline f1">I am a status container</div>
      <div className="blue">{children}</div>
    </>
  );
};
