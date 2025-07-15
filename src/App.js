import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewQuote from './components/ViewQuote';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path ="/"element={<ViewQuote/>} />

</Routes>
</BrowserRouter>
  );
}

export default App;
