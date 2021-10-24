import { ThemeProvider } from "./contexts/themeContext";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <ThemeProvider>
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;