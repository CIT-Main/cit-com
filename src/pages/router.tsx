import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from '../components'
import { PageTitleUpdater } from '../components/Hook/PageTitleUpdater.hook'
import NotFoundPage from './404/404'
import EventPage from './Event'
import HomePage from './Home'
import TeamPage from './Team'
import ContactPage from './contact'
import SponsorshipPage from './sponsorship'

export function AppRouter() {
  return (
    <Router>
      <PageTitleUpdater />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/team"
          element={
            <Layout>
              <TeamPage />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
        <Route
          path="/events"
          element={
            <Layout>
              <EventPage />
            </Layout>
          }
        />
        <Route
          path="/sponsorship"
          element={
            <Layout>
              <SponsorshipPage />
            </Layout>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}
