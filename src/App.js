import Card from './components/Card/Card';

import Shrimps from './img/shrimps.jpg';

import './styles/App.css';

const data = [
  {
    title: 'Shrimp and Chorizo Paella',
    date: 'September 14, 2016',
    short: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    long: 'xyz',
    img: Shrimps
  }
]

function App() {
  return (
    <div className="App">
      <Card data={data[0]} />
    </div>
  );
}

export default App;
