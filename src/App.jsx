import { Layout } from './components/Layout.jsx';
import { pages } from './data/site.js';
import { AdvisorPage } from './pages/AdvisorPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { CosmeticsPage } from './pages/CosmeticsPage.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { HowToBuyPage } from './pages/HowToBuyPage.jsx';
import { NarrativePage } from './pages/NarrativePage.jsx';
import { RecommendationsPage } from './pages/RecommendationsPage.jsx';

function renderPage(pageKey) {
  switch (pageKey) {
    case 'home':
      return <HomePage />;
    case 'cosmetics':
      return <CosmeticsPage />;
    case 'recommendations':
      return <RecommendationsPage />;
    case 'buy':
      return <HowToBuyPage />;
    case 'advisor':
      return <AdvisorPage />;
    case 'contact':
      return <ContactPage />;
    case 'philosophy':
    case 'about':
    case 'legal':
    case 'privacy':
    case 'cookies':
    case 'affiliate':
      return <NarrativePage page={pages[pageKey]} />;
    default:
      return <HomePage />;
  }
}

export default function App({ pageKey }) {
  const currentPage = pages[pageKey] || pages.home;

  return <Layout currentPage={currentPage}>{renderPage(currentPage.key)}</Layout>;
}
