import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PlatformOverview from "./pages/PlatformOverview";
import JoinWaitingList from "./pages/JoinWaitingList";
import Navigation from "./components/Navigation";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/platform-overview" element={<PlatformOverview />} />
          <Route path="/join-waiting-list" element={<JoinWaitingList />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
