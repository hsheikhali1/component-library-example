import { Icon } from "./components/atoms/Icons";
import { Container } from "./components/layout";
import Box from "./components/Layout/Box/Box";
import Navigation from "./components/molecules/Navigation/Navigation";

function App() {
  return (
    <Box className="bg-slate-500 text-blue-400">
      <Navigation />

      <Container>
        <Icon name="sso" />
      </Container>
    </Box>
  );
}

export default App;
