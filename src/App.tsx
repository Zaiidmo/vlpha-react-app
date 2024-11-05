import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import Layout from './layouts/clientLayout'
import routes from './routes/routes'

function AppRoutes() {
  const element = useRoutes(routes)
  return element
}

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  )
}

export default App