import './App.css';
import FAQ from './components/FAQ';
import Lines from './components/Lines';
import Services from './components/Services';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <div className="App">
     <Services/>
      <FAQ/>
       <Lines/>
       <MainRoutes/>
    </div>
  );
}

export default App;


