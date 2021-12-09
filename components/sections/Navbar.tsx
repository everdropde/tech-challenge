import Logo from 'components/icons/Logo'
import type { FC } from 'react'

const Navbar: FC = () => {
  return (
    <div className="flex items-center justify-center bg-white h-14">
      <Logo />
    </div>
  )
}

export default Navbar
