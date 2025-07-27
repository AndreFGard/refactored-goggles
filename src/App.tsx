import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { LoginView } from './pages/loginVIew'
import { SignUpPage } from './pages/SignupVIew'
import { TagAddition } from './pages/tag-addition'
import Home from './pages/home.tsx'
import ProfilePage from './pages/perfil'
import { EventViewPage } from './pages/EventView'
import EventsPage from './pages/events-page'
import TopNavigation from './components/TopNavigation'

// Mini Create Page Demo Component
const CreatePage = () => {
  return (
    <div className="flex flex-col ">
      <TopNavigation title="Criar Evento" showBackButton={true} />
      
      <div className="flex-1 p-4">
        <div className="space-y-4">
          <h2 className="text-white text-xl font-bold">Criar Novo Evento</h2>
          
          <div>
            <label className="block text-[#9db89d] text-sm mb-2">Título do Evento</label>
            <input 
              type="text" 
              placeholder="Digite o título..."
              className="w-full p-3 rounded-xl bg-[#293829] text-white placeholder:text-[#9db89d] focus:outline-none focus:ring-2 focus:ring-[#19e519]"
            />
          </div>
          
          <div>
            <label className="block text-[#9db89d] text-sm mb-2">Descrição</label>
            <textarea 
              placeholder="Descreva seu evento..."
              rows={4}
              className="w-full p-3 rounded-xl bg-[#293829] text-white placeholder:text-[#9db89d] focus:outline-none focus:ring-2 focus:ring-[#19e519] resize-none"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[#9db89d] text-sm mb-2">Data</label>
              <input 
                type="date"
                className="w-full p-3 rounded-xl bg-[#293829] text-white focus:outline-none focus:ring-2 focus:ring-[#19e519]"
              />
            </div>
            <div>
              <label className="block text-[#9db89d] text-sm mb-2">Hora</label>
              <input 
                type="time"
                className="w-full p-3 rounded-xl bg-[#293829] text-white focus:outline-none focus:ring-2 focus:ring-[#19e519]"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-[#9db89d] text-sm mb-2">Local</label>
            <input 
              type="text" 
              placeholder="Onde será o evento?"
              className="w-full p-3 rounded-xl bg-[#293829] text-white placeholder:text-[#9db89d] focus:outline-none focus:ring-2 focus:ring-[#19e519]"
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <button className="flex-1 py-3 rounded-full bg-[#293829] text-white font-medium">
              Salvar Rascunho
            </button>
            <button className="flex-1 py-3 rounded-full bg-[#19e519] text-[#111811] font-bold">
              Publicar Evento
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
    <Router >
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
          <Route path="/create" element={<CreatePage />} />
          
          {/* Placeholder routes for missing pages */}
          <Route path="/notifications" element={<div className="p-4 text-white">Notifications Page - Coming Soon</div>} />
          
          {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* 404 fallback */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Layout>
    </Router>
    </div>
  )
}

export default App
