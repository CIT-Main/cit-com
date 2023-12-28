import AboutComponent from '../../components/About'
import ClubNews from '../../components/ClubNews'
import { CompaniesLogos } from '../../components/Compines'
import FqsComponent from '../../components/FQS'
import CEOWord from '../../components/Homepage/CEOWord'
import CTA1 from '../../components/Homepage/CTA1'
import CTA2 from '../../components/Homepage/CTA2'
import NewsLaterComponent from '../../components/NewsLatter'

const HomePage = () => {
  return (
    <>
      <>
        <AboutComponent />
        <CTA1 />

        <CEOWord />
        <CompaniesLogos />
        <CTA2 />
        <NewsLaterComponent />
        <ClubNews />
        <FqsComponent />
      </>
    </>
  )
}

export default HomePage
