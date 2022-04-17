import { css } from "@emotion/react"

export const flex = css`
  display: flex;
`

export const centerItemsVertically = css`
  ${flex}
  align-items: center;
`

export const justifyContentSpaceBetween = css`
  ${flex}
  justify-content: space-between;
`

export const heightVh = (vh: number) => css`
  height: ${vh}vh
`

export const padding = (n: number) => css`
  padding: ${n}px
`

export const margin = (value: string = '', n: string) => css`
  ${['margin', value].filter(n => n).join('-')} :${n}
`
