import cn from 'classnames'
import type { FC, HTMLAttributes } from 'react'
import Check from 'components/icons/Check'

export type PanelHeaderProps = {
  headline: string
  subline?: string
  bold?: boolean
} & HTMLAttributes<HTMLDivElement>

export const PanelHeader: FC<PanelHeaderProps> = (props) => {
  const { headline, subline, bold, className } = props

  return (
    <div className={cn(className, 'flex items-center justify-between')}>
      <div className="text-base font-semibold">{headline}</div>

      {subline && (
        <div className="flex items-center">
          {!bold && <Check />}
          <div
            className={cn(
              'flex py-2 pr-4 pl-1 items-center text-xs font-bold gap-1 rounded-lg',
              {
                'text-secondary': !bold,
                'bg-secondary text-panel': bold,
              }
            )}
          >
            {subline}
          </div>
        </div>
      )}
    </div>
  )
}

export default PanelHeader
