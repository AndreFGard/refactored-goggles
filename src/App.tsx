import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { LoginView } from './pages/loginVIew'
import { SignUpPage } from './pages/SignupVIew'
import { TagAddition } from './pages/tag-addition'
import Home from './pages/home.tsx'
import ProfilePage from './pages/perfil'
import { EventViewPage } from './pages/EventView'
import EventsPage from './pages/events-page'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<LoginView />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/interests" element={<TagAddition />} />
          
          {/* Main App Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventViewPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          
          {/* Placeholder routes for missing pages */}
          <Route path="/create" element={<div className="p-4 text-white">Create Page - Coming Soon</div>} />
          <Route path="/notifications" element={<div className="p-4 text-white">Notifications Page - Coming Soon</div>} />
          
          {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* 404 fallback */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
