import Image from 'next/image'
import type { FC } from 'react'

type Props = {
  count: string
  saving: string
}

const ListItem = ({ count, saving }: Props): JSX.Element => {
  return (
    <li className="flex items-center">
      <p className="text-xs"> {count}.</p>
      <div className="mx-2">
        <Image
          quality="85"
          src={'/present.svg'}
          alt="present"
          height={20}
          width={20}
          layout="fixed"
        />
      </div>

      <p className="font-bold text-secondary"> {saving} </p>
    </li>
  )
}

const Savings: FC = () => {
  return (
    <div className="flex">
      <div className="flex-none w-1/2 p-6 text-center border-r-2 border-dashed border-secondary">
        <p className="font-bold text-secondary">
          <span className="text-5xl">100€</span>
          <br />
          <span className="text-3xl">save</span>
        </p>

        <p className="mt-2 text-sm font-semibold text-gray-700">
          for the first 4 deliveries
        </p>
      </div>

      <ul className="w-1/2 min-h-full p-6 m-0 space-y-4">
        <ListItem count={'1'} saving={'70€'} />
        <ListItem count={'2'} saving={'10€'} />
        <ListItem count={'3'} saving={'10€'} />
        <ListItem count={'4'} saving={'10€'} />
      </ul>
    </div>
  )
}

export default Savings
