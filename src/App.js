import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


// guida api : https://developers.google.com/books/docs/v1/reference/?apix=true
// console api: https://console.developers.google.com/apis/credentials?authuser=2&project=bookshelf-302413&supportedpurview=project

import home from './pages/home'
import books from './pages/books'
import randomBook from './pages/randomBook'


function App() {
  return (
    <Router className="App">
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/books:id" component={books} />
        <Route path="/randombook" component={randomBook} />
      </Switch>
    </Router>
  );
}

export default App;
