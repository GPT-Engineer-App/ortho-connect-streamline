import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PlatformOverview from "./pages/PlatformOverview";
import Navigation from "./components/Navigation";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/platform-overview" element={<PlatformOverview />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
