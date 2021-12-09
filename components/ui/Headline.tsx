import cn from 'classnames'
import { FC, HTMLAttributes } from 'react'

type Props = {
  headline: string
  subline?: string
} & HTMLAttributes<HTMLHeadingElement>

const Headline: FC<Props> = ({ headline, subline, className }) => {
  return (
    <h1 className={cn(className, 'text-3xl uppercase font-display')}>
      {headline}

      {subline && (
        <>
          <br />
          <span className="font-normal">{subline}</span>
        </>
      )}
    </h1>
  )
}

export default Headline
