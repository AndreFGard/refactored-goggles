import { Layout } from './components/Layout.tsx'
import { TagAddition } from './pages/tag-addition.tsx'
import Home  from './pages/home.tsx'
import { EventViewPage } from './pages/EventView.tsx'
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
    </>
  )
}

export default App
