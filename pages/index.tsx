import { useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Testimonials from 'components/sections/Testimonials'
import Headline from 'components/ui/Headline'
import BlueBanner from 'components/sections/BlueBanner'
import Navbar from 'components/sections/Navbar'
import ProductSlider from 'components/sections/ProductSlider'
import Container from 'components/ui/Container'
import Text from 'components/ui/Text'
import Panel from 'components/ui/Panel'
import PanelHeader from 'components/ui/PanelHeader'
import ReviewSummary from 'components/sections/ReviewSummary'
import Footer from 'components/sections/Footer'
import StepInit from 'components/sections/StepInit'
import ActionSheet from 'components/ActionSheet'
import Coupon from 'components/Coupon'
import PrimaryButton from 'components/ui/PrimaryButton'

import { StepContext } from 'context/Step'
import { StarterBoxPanel } from 'components/sections/StarterBoxPanel'

import type { FC } from 'react'

const Home: FC = () => {
  const { next } = useContext(StepContext)

  return (
    <div className="w-full overflow-hidden md:mx-auto bg-beige">
      <Head>
        <title>everdrop All In One Clean Home Box</title>

        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/hrn8xkj.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <section className="md:bg-panel">
        <Container className="gap-x-8 md:flex">
          <div className="relative flex-1 w-full mb-6 is-container-ignore h-60vw md:h-auto ">
            <Image
              src="/hero.jpg"
              alt="hero"
              layout="fill"
              blurDataURL="/"
              objectFit="cover"
              placeholder="blur"
            />
          </div>

          <div className="flex-1 mb-6 md:py-12 md:mb-0">
            <Headline
              className="mb-4"
              headline="All In One"
              subline="Clean Home Box"
            />
            <div className="mb-4 text-base md:max-w-sm">
              Conveniently switch now to household products without plastic
              waste in the subscription switch!
            </div>
            <Coupon className="mb-6" />
          </div>
        </Container>
      </section>

      <section className="bg-panel">
        <Container>
          <StepInit />
        </Container>
      </section>

      <section>
        <Container className="gap-x-8 md:py-12 md:flex">
          <StarterBoxPanel className="flex-1 mb-6 md:w-1/2" />
          <Panel className="flex-1 mb-6 md:w-1/2">
            <PanelHeader
              className="mb-4"
              headline="Refill products"
              subline="3x 10€ discount"
            />
            <div className="mb-6 font-semibold text-secondary">
              You will receive a discount of 10€ each on the first three refill
              boxes.
            </div>
            <div className="mb-8">
              <ProductSlider />
            </div>
            <Text className="mb-4" headline="Regularly delivered to your home">
              . You will receive all refill products in individually
              customizable delivery intervals.
            </Text>
            <ul className="mb-6">
              <li>Manage subscription online yourself</li>
              <li>Cancel at any time - no contract</li>
              <li>No minimum term</li>
            </ul>
            <BlueBanner className="mb-4" />
            <PrimaryButton onClick={next}>Configure subscription</PrimaryButton>
          </Panel>
        </Container>
      </section>

      <section>
        <Container className="md:flex gap-x-8">
          <div className="relative h-60vw is-container-ignore md:w-1/2 md:h-auto">
            <Image
              src="/reviews-hero.jpg"
              alt="reviews"
              layout="fill"
              blurDataURL="/"
              objectFit="cover"
              placeholder="blur"
            />
          </div>
          <div className="pt-10 pb-10 md:w-1/2">
            <Headline
              className="mb-6"
              headline="Over 500,000 customers"
              subline="Trust everdrop"
            />
            <div className="flex flex-col mb-6 gap-6">
              <Panel size="lg">
                <ReviewSummary
                  name="Reviews.io"
                  rating={4.7}
                  totalRatingsCount={16.837}
                  link="https://www.reviews.io/company-reviews/store/everdrop.de"
                />
              </Panel>
              <Panel size="lg">
                <ReviewSummary
                  name="Trustpilot"
                  rating={4.2}
                  totalRatingsCount={2.671}
                  link="https://de.trustpilot.com/review/www.everdrop.de"
                />
              </Panel>
              <Panel size="lg">
                <ReviewSummary
                  name="Google Bewertungen"
                  rating={4.8}
                  totalRatingsCount={897}
                  link="https://www.google.com/search?q=everdrop"
                />
              </Panel>
            </div>
            <Testimonials />
          </div>
        </Container>
      </section>
      <section className="hidden bg-panel md:block">
        <Container>
          <StepInit />
        </Container>
      </section>

      <section className="bg-panel">
        <Container className="flex-row-reverse bg-panel gap-x-8 md:flex">
          <div className="is-container-ignore md:w-1/2">
            <video className="w-full" autoPlay muted playsInline loop>
              <source src="video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="py-10 md:w-1/2">
            <Headline
              className="mb-6"
              headline="Every product an innovation"
              subline="For less plastic"
            />
            <Text className="mb-6" headline="Refill instead of throwing away">
              Our products are designed so that the bottles and containers can
              be refilled again and again instead of throwing them away.
              Together against plastic waste.
            </Text>
            <Text
              className="mb-6"
              headline="Cycle: paper instead of plastic packaging"
            >
              All of our products are packaged in paper because paper has the
              best recycling rate among all packaging materials.
            </Text>
            <Text headline="Biodegradable & without microplastics">
              All of our products are biodegradable and do not contain
              completely without fillers or microplastics
            </Text>
          </div>
        </Container>
      </section>

      <section className="bg-panel">
        <Container className="py-12 gap-x-8 bg-panel md:flex md:py-0">
          <div className="relative w-full is-container-ignore h-60vw md:w-1/2 md:h-auto">
            <Image
              src={'/usp-hero.jpg'}
              alt="USP"
              layout="fill"
              placeholder="blur"
              blurDataURL="/"
              objectFit="cover"
            />
          </div>
          <div className="py-12 md:w-1/2">
            <Headline
              className="mb-6"
              headline="WHY EVERDROP?"
              subline="3 GOOD REASONS"
            />
            <Text className="mb-6" headline="For the sake of the environment">
              . We completely eliminate disposable plastic and unnecessary
              chemicals.
            </Text>
            <Text className="mb-6" headline="It couldn't be more convenient">
              We save you the trip to the supermarket and lugging heavy
              Household products
            </Text>
            <Text headline="Innovative product developments">
              We rely on individually adapted detergents, natural fragrances
              fragrances, organic action helpers like probiotics and fewer
              Chemical cleaners in our products.
            </Text>
          </div>
        </Container>
      </section>
      <section className="hidden bg-panel md:block">
        <Container>
          <StepInit />
        </Container>
      </section>

      <Footer />

      <ActionSheet />
    </div>
  )
}

export default Home
