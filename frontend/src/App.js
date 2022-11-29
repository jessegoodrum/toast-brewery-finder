import Main from './Components/Main/Main'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {ConfigureStore} from './Redux/configureStore'
import ReviewCard from './Components/Users/ReviewCard'
import ReviewForm from './Components/Users/ReviewForm'
import BeerDetails from './Components/Beer/BeerDetails'
import BreweryDetails from './Components/Brewery/BreweryDetails'



const store = ConfigureStore();

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
