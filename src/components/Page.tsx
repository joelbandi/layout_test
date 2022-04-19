import { useState } from "react";

export const Page = ({
  renderRightColumn,
  renderMiddleColumn,
}: {
  renderRightColumn: any;
  renderMiddleColumn: any;
}) => {
  const [showRightColumn, setShowRightColumn] = useState<boolean>(false);
  const show = () => setShowRightColumn(true);
  const hide = () => setShowRightColumn(false);
  return (
    <>
      {" "}
      {renderMiddleColumn(show, hide)}
      {showRightColumn && renderRightColumn()}
    </>
  );
};
