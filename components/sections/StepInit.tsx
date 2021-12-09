import PrimaryButton from 'components/ui/PrimaryButton'
import { StepContext } from 'context/Step'
import { FC, useContext } from 'react'

const StepInit: FC = () => {
  const { next } = useContext(StepContext)

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 w-full bg-panel rounded-t-xl md:static">
      <div className="items-center justify-center p-4 md:flex gap-x-12">
        <div className="flex-none mb-1 text-base text-center">
          Starter box for <span className="font-bold">79,99€</span> instead{' '}
          <span className="text-gray-500 line-through">149,99€</span>
        </div>
        <PrimaryButton onClick={next}>Configure subscription</PrimaryButton>
      </div>
    </div>
  )
}

export default StepInit
