import React, { FC } from 'react'
import { css } from '@emotion/core'
import { useLocation } from '@reach/router'

const wrapperCss = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const headlineCss = css`
  font-size: 65px;
  margin-bottom: 70px;
`

const sublineCss = css`
  font-size: 25px;
  display: flex;
  align-items: center;
`

const inputCss = css`
  border: 1px solid #888;
  border-radius: 8px;
  margin-left: 20px;
  padding: 5px 10px;
  width: 320px;
  height: 35px;
  color: #222;
  font-size: 25px;
  margin-top: 2px;
`

type Props = {
  teamName?: string
}

const TopSection: FC<Props> = ({ teamName }) => {
  const location = useLocation()
  console.log(location)
  return (
    <div css={wrapperCss}>
      <div css={headlineCss}>
        Clicking for team <strong>{teamName}</strong>{' '}
      </div>
      <div css={sublineCss}>
        <i>Too lazy to click? Let your pals click for you:</i>
        <input css={inputCss} readOnly value={location.href} />
      </div>
    </div>
  )
}

export default TopSection
