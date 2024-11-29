export const NavRestaurant = ({arrRestaurants, handleSelectRestaurant}) => (
  <nav>
    {arrRestaurants.map(({id, name}) => (
      <button
        key={id}
        onClick={() => handleSelectRestaurant(id)}
      >
        {name}
      </button>
    ))}
  </nav>
)