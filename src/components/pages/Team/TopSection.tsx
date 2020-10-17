import React, { FC } from 'react'
import { css } from '@emotion/core'
import { useLocation } from '@reach/router'
import Input from '../../bricks/Input'

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
  margin-left: 20px;
`

type Props = {
  teamName?: string
}

const TopSection: FC<Props> = ({ teamName }) => {
  const location = useLocation()

  return (
    <div css={wrapperCss}>
      <div css={headlineCss}>
        Clicking for team <strong>{teamName}</strong>{' '}
      </div>
      <div css={sublineCss}>
        <i>Too lazy to click? Let your pals click for you:</i>
        <Input css={inputCss} readOnly value={location.href} />
      </div>
    </div>
  )
}

export default TopSection
