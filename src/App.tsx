import { useRoutes } from 'react-router-dom';
import GNB from './components/gnb';
import { routes } from './routes';

function App() {
  const elem = useRoutes(routes);
  return (
    <>
      <GNB />
      {elem}
    </>
  );
}

export default App;
