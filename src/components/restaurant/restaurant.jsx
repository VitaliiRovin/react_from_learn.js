import {useState} from 'react';
import {RESTAURANTS} from '../../data/mock.js';
import {NavRestaurant} from '../nav-restaurant/nav-restaurant.jsx';
import {Menu} from '../menu/menu.jsx';
import {Reviews} from '../reviews/reviews.jsx';
import {Container} from '../container/container.jsx';

export const Restaurant = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(RESTAURANTS[0]);
  const handleSelectRestaurant = (id) => {
    setSelectedRestaurant(RESTAURANTS.find(restaurant => restaurant.id === id))
  }

  return (
    <>
      <NavRestaurant arrRestaurants={RESTAURANTS} handleSelectRestaurant={handleSelectRestaurant}/>
      <Container>
        <section key={selectedRestaurant.id}>
          <h2>{selectedRestaurant.name}</h2>
          <Menu menu={selectedRestaurant.menu}/>
          <Reviews reviews={selectedRestaurant.reviews}/>
        </section>
      </Container>
    </>
  )
}