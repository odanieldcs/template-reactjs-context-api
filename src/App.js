import Routes from './routes';
import { AuthProvider } from './contexts/userContext';
import { LoadingProvider } from './contexts/loadingContext';

function App() {
  return (
    <LoadingProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </LoadingProvider>
  );
}

export default App;
