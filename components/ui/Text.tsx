import type { FC, HTMLAttributes } from 'react'

type Props = {
  headline?: string
} & HTMLAttributes<HTMLDivElement>

export const Text: FC<Props> = ({ headline, children, className }) => {
  return (
    <div className={className}>
      {headline && (
        <div className="mb-2 text-base font-semibold">{headline}</div>
      )}

      <div className="text-sm">{children}</div>
    </div>
  )
}

export default Text
