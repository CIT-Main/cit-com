import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventPage from './Event'
import AboutPage from './about'
import ContactPage from './contact'
import SponsorshipPage from './sponsorship'
import NotFoundPage from './404/404'
import HomePage from './Home'
import { PageTitleUpdater } from '@/components/Hook/PageTitleUpdater.hook';
import Layout from '@/components';
export function AppRouter() {
  return (
    <Router>
      <PageTitleUpdater />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/sponsorship" element={<SponsorshipPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}