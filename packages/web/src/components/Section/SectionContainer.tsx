/**
 *
 */
interface SectionContainerProps extends Props {
  header: string;
}

export const SectionContainer = ({
  header,
  children,
}: SectionContainerProps): JSX.Element => {
  return (
    <>
      <h2 className="">{header}</h2>
      <div className="">{children}</div>
    </>
  );
};
