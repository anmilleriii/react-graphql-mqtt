/**
 *
 */
interface SectionContainerProps extends Props {
  header?: string;
}

export const SectionContainer = ({
  header,
  children,
}: SectionContainerProps): JSX.Element => {
  return (
    <>
      <div className="mb3">
        <h3 className="">{header}</h3>
        <div className="">{children}</div>
      </div>
    </>
  );
};
