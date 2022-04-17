/** @jsxImportSource @emotion/react */

import { ReactNode } from "react"
import { css } from "@emotion/react"
import { Link } from "react-router-dom"
import { margin } from "../Styles"

const leftColumnStyles = css`
  border: 3px solid black;
  width: 20%;
  height: 96vh;
  display: flex;
  flex-direction: column;
`

export const LeftColumn = ({ children }: { children: ReactNode }) => {
  return (
    <div css={[leftColumnStyles]}>
      {children}
    </div>
  )
}

export const PlatformNav = () => (
  <LeftColumn>
    <Link to="/queue">Queue</Link>
    <Link to="/patients">Patients</Link>
    <Link css={[margin('top', 'auto')]} to="/practice-settings">Practice Settings</Link>
  </LeftColumn>
)

export const PracticeSettings = () => (
  <LeftColumn>
    <Link to="/practice-settings/general">Practice Settings</Link>
    <Link to="/practice-settings/users">Users</Link>
    <Link to="/practice-settings/Integrations">Integrations</Link>
    <Link css={[margin('top', 'auto')]} to="/">Exit Settings</Link>
  </LeftColumn>
)
