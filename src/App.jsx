import "./App.css";
import { AppBar } from "./components/AppBar/AppBar";
import { Layout } from "./components/Layout/Layout";
import Navigation from "./components/Navigetion/Navigation";

function App() {
  return (
    <Layout>
      <AppBar />
      <Navigation />
    </Layout>
  );
}

export default App;
