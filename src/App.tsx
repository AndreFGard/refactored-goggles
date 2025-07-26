import { Layout } from './components/Layout.tsx'
import { TagAddition } from './pages/tag-addition.tsx'
import { EventViewPage } from './pages/EventView.tsx'
function App() {
  return (<>
      <Layout>
        <TagAddition />
      </Layout>
      <Layout>
        <EventViewPage/>
      </Layout>
    </>
  )
}

export default App
