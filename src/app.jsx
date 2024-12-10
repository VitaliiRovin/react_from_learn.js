import {Layout} from './components/layout/layout.jsx';
import {Restaurant} from './components/restaurant/restaurant.jsx';
import './styles/normalize.css'
import './styles/fonts.css'
import './styles/root.css'
import './styles/globals.css'

export const App = () => (
  <Layout>
    <h1>Restaurants</h1>
    <Restaurant/>
  </Layout>
)