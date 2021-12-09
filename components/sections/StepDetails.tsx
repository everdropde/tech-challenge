import { FC, useContext } from 'react'
import PrimaryButton from 'components/ui/PrimaryButton'
import { StepContext } from 'context/Step'
import { Details } from 'components/Details'

const StepDetails: FC = () => {
  const { next } = useContext(StepContext)

  return (
    <div>
      <div className="p-4">
        <div className="mb-4 text-lg font-semibold">
          Clean-Home-Box: Content
        </div>

        <Details />
      </div>

      <div className="sticky bottom-0 flex flex-col z-2 bg-panel">
        <div className="p-4">
          <PrimaryButton onClick={next}>Back</PrimaryButton>
        </div>
      </div>
    </div>
  )
}

export default StepDetails
