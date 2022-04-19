/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
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
    <div css={[divWidth]}>
      <div css={[middleColumn]}>
        {renderMiddleColumn(show, hide)}
      </div>
      <div css={[rightColumn]}>
        {showRightColumn && renderRightColumn()}
      </div>
    </div>
  );
};

const divWidth = css`
  display: flex;
  justify-content: space-between;
  width: 100%
`

const middleColumn = css`
  width: 100%
`

const rightColumn = css`
  border: 2px solid black
`
