import cn from 'classnames'
import Image from 'next/image'
import { Details } from 'components/Details'
import ArrowDown from 'components/icons/ArrowDown'
import { Button } from 'components/ui/Button'
import Panel from 'components/ui/Panel'
import PanelHeader from 'components/ui/PanelHeader'
import Text from 'components/ui/Text'
import { FC, HTMLAttributes, useState } from 'react'

export const StarterBoxPanel: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const [open, toggle] = useState(false)

  return (
    <Panel className={className}>
      <PanelHeader
        className="mb-6"
        headline="Clean-Home-Box"
        subline="70€ Rabatt"
      />

      <div className="relative mb-6">
        <Image
          src="/starter-box.png"
          alt="hero"
          layout="responsive"
          width={838}
          height={398}
        />
      </div>

      <Text className="mb-4" headline="19-teiliges Starter Set">
        everdrop household products + stylish bottles and containers in the 1st.
        Delivery.
      </Text>

      <ul className="mb-6">
        <li>make the world cleaner</li>
        <li>save unnecessary disposable plastic</li>
        <li>no superfluous chemistry</li>
      </ul>

      <div className="flex items-center justify-between gap-2">
        <Button>
          <span className="font-bold">79,99€</span>{' '}
          <span className="text-gray-400 line-through">149,99€</span>
        </Button>

        <div
          className="flex items-end gap-1"
          onClick={() => toggle((current) => !current)}
        >
          <button className="text-base font-semibold underline">Details</button>
          <ArrowDown className={cn({ 'transform rotate-180': open })} />
        </div>
      </div>

      {open && <Details className="mt-4" />}
    </Panel>
  )
}

export default StarterBoxPanel
