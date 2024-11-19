import {Layout} from './components/layout/layout.jsx';
import {Restaurant} from './components/restaurant/restaurant.jsx';

export const App = () => (
  <Layout>
    <h1>Restaurants</h1>
    <Restaurant/>
  </Layout>
)