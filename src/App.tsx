import { Layout } from './components/Layout.tsx'
import { TagAddition } from './pages/tag-addition.tsx'
import Home  from './pages/home.tsx'
import ProfilePage from './pages/perfil.tsx'
import { EventViewPage } from './pages/EventView.tsx'
import { LoginView } from './pages/loginVIew.tsx'
function App() {
  return (<>
      <Layout>
        <TagAddition />
      </Layout>
      <Layout>
        <EventViewPage/>
      </Layout>
      <Layout>
        <Home />
      </Layout>
      <Layout>
        <LoginView/>
      </Layout>
    </>
  )
}

export default App
