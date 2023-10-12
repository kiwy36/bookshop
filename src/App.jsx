import { Routes, Route } from 'react-router-dom';
import Root from '../routes/Root';

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Root/>}/>
              <Route path="/contacto" element={""} />
              <Route path="/otracosa" element={""} />
          </Routes>
      </>
  );
}


export default App