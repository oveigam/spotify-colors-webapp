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

const Content = () => {
  const { accessToken } = useContext(authContext)
  return !accessToken ? <LoginPage /> : <AuthorizedContent />
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

        <Route path="/" exact>
          <div>hola</div>
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
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Content />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;