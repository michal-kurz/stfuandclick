import React, { FC } from 'react'
import { containerCss, statBoxCss } from './styles'
import StatBox from '../StatBox'
import { applyThousandsSeparator } from '../../../utils'

export type Props = { myClicks: number; teamClicks: number }

const Counters: FC<Props> = ({ myClicks, teamClicks }) => (
  <div css={containerCss}>
    <StatBox label="Your clicks" value={applyThousandsSeparator(myClicks)} css={statBoxCss} />
    <StatBox label="Team clicks" value={applyThousandsSeparator(teamClicks)} css={statBoxCss} />
  </div>
)

export default Counters
export type CountersProps = Props
