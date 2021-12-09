import Link from 'next/link'
import Logo from 'components/icons/Logo'
import Container from 'components/ui/Container'
import Socials from 'components/sections/Socials'
import PaymentLogos from 'components/sections/PaymentLogos'
import type { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer>
      <section className="bg-light-gray">
        <Container className="py-10 mb-6 text-base font-semibold gap-x-10 md:flex">
          <div className="md:w-2/5">
            <div className="mb-6">Secure shopping</div>
            <PaymentLogos />
          </div>
          <div>
            <div className="my-6 md:my-0">Social Media</div>
            <Socials />
          </div>
        </Container>
      </section>

      <section className="bg-panel">
        <Container className="flex-row-reverse items-end justify-between pt-10 pb-40 gap-x-8 md:pb-10 md:flex ">
          <div className="items-center mb-14 space-y-4 gap-x-8 lg:space-y-0 lg:flex md:mb-0">
            <Link href="https://www.everdrop.de/policies/terms-of-service">
              <a target="_blank" className="block text-base no-underline">
                General Terms and Conditions (GTC)
              </a>
            </Link>

            <Link href="https://www.everdrop.de/policies/refund-policy">
              <a target="_blank" className="block text-base no-underline">
                Cancellation policy
              </a>
            </Link>

            <Link href="https://www.everdrop.de/policies/privacy-policy">
              <a target="_blank" className="block text-base no-underline">
                Privacy policy
              </a>
            </Link>

            <Link href="https://www.everdrop.de/policies/legal-notice">
              <a target="_blank" className="block text-base no-underline">
                Impressum
              </a>
            </Link>
          </div>

          <div className="space-y-4">
            <Logo />
            <div className="text-base">© 2021 everdrop GmbH</div>
            <div className="text-base text-gray-400">All rights reserved</div>
          </div>
        </Container>
      </section>
    </footer>
  )
}

export default Footer
