import authContext, { AuthProvider } from "./contexts/authContext";
import { ThemeProvider } from "./contexts/themeContext";
import LoginPage from "./pages/LoginPage";
import { useContext } from 'react';
import AppLayout from './components/layout/AppLayout';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ArtistsPage from './pages/ArtistsPage';
import CustomizePage from './pages/CustomizePage';
import AlbumsPage from './pages/AlbumsPage';
import PlaylistsPage from './pages/PlaylistsPage';
import store from "./store/store";
import { Provider } from "react-redux";
import Page from "./components/layout/Page";
import HomePage from './pages/HomePage';
import SongsPage from './pages/SongsPage';

// TODO Gitanada para limpiar las credenciales, meter un boton de cerrar sesion
// localStorage.clear()

const Content = () => {
  const { accessToken, spotifyReady } = useContext(authContext)

  if (!accessToken) return <LoginPage />
  if (spotifyReady) return <AuthorizedContent />

  return <Page />
}

const AuthorizedContent = () => {
  return (
    <AppLayout>
      <Switch>

        <Route path="/playlists" exact>
          <PlaylistsPage />
        </Route>

        <Route path="/artists" exact>
          <ArtistsPage />
        </Route>

        <Route path="/albums" exact>
          <AlbumsPage />
        </Route>

        <Route path="/customize" exact>
          <CustomizePage />
        </Route>

        <Route path="/songs" exact>
          <SongsPage />
        </Route>

        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/">
          <Redirect to="/" />
        </Route>

      </Switch>
    </AppLayout>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Content />
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
}

export default App;