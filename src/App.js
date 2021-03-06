import Card from './components/Card/Card';
import Menu from './components/Menu/Menu';
import Employees from './components/Employees/Employees';

import Shrimps from './img/shrimps.jpg';
import Spaghetti from './img/spaghetti_bolognese.jpg';

import './styles/App.css';

const data = [
  {
    title: 'Shrimp and Chorizo Paella',
    date: 'September 14, 2016',
    short: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    long: 'Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes. Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil. Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open. Set aside off of the heat to let rest for 10 minutes, and then serve.',
    img: Shrimps
  },
  {
    title: 'Spaghetti Bolognese',
    date: 'October 8, 2017',
    short: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    long: 'Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes. Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil. Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open. Set aside off of the heat to let rest for 10 minutes, and then serve.',
    img: Spaghetti
  }
]

function App() {

  const cards = data.map( item => (
    <Card data={item}/>
  ))

  return (
    <div className="App">
      <Menu />
      {cards}
      <Employees />
    </div>
  );
}

export default App;
