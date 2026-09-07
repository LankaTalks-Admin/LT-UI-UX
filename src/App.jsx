import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import IntelligencePage from '@/pages/IntelligencePage'
import KnowledgeHubPage from '@/pages/KnowledgeHubPage'
import ArchivePage from '@/pages/ArchivePage'
import TendersPage from '@/pages/TendersPage'
import CareersPage from '@/pages/CareersPage'
import StoryPage from '@/pages/StoryPage'
import StoriesLayout from '@/pages/StoriesLayout'
import StoriesPage from '@/pages/StoriesPage'
import SectorPage from '@/pages/SectorPage'
import SubSectorPage from '@/pages/SubSectorPage'
import NotFoundPage from '@/pages/NotFoundPage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intelligence" element={<IntelligencePage />} />
        <Route path="/knowledge-hub" element={<KnowledgeHubPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/tenders" element={<TendersPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/post/:slug" element={<StoryPage />} />
        <Route path="/stories" element={<StoriesLayout />}>
          <Route index element={<StoriesPage />} />
          <Route path=":sectorSlug" element={<SectorPage />} />
          <Route path=":sectorSlug/:subSectorSlug" element={<SubSectorPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  )
}
