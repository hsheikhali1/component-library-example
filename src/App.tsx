import { Icon } from "./components/atoms/Icons";
import Box from "./components/Layout/Box/Box";
import Navigation from "./components/molecules/Navigation/Navigation";

function App() {
  return (
    <Box className="bg-slate-500 text-blue-400">
      <Navigation />
      <Icon name="sso" />
    </Box>
  );
}

export default App;
