/** @jsxImportSource @emotion/react */

import { centerItemsVertically, heightVh, justifyContentSpaceBetween, padding } from "../Styles"
import { css } from "@emotion/react"
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";

const headerColors = css`
  background-color: gray;
  color: white;
`
const headerStyles = [headerColors, centerItemsVertically, justifyContentSpaceBetween, heightVh(3), padding(4)]

export const Header = ({ searchBar }: { searchBar: boolean }) => (
  <nav css={headerStyles}>
    <Link to="/">TeladocHealth</Link>
    {searchBar && <input placeholder='Search Patients' />}
    <VscAccount />
  </nav>
)
