import { AppBar } from "./components/AppBar/AppBar";
import Contact from "./components/Contact/Contact";
import { Layout } from "./components/Layout/Layout";
import Navigation from "./components/Navigetion/Navigation";

function App() {
  return (
    <Layout>
      <AppBar />
      <Navigation />
      <Contact />
    </Layout>
  );
}

export default App;
