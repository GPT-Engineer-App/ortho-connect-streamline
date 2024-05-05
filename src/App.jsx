import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PlatformOverview from "./pages/PlatformOverview";
import JoinWaitingList from "./pages/JoinWaitingList";
import AIPrompt from "./pages/AIPrompt";
import Navigation from "./components/Navigation";
import SurgeonScheduling from "./pages/SurgeonScheduling";
import TheaterListAndStack from "./pages/TheaterListAndStack";
import CommunicationAndAlerts from "./pages/CommunicationAndAlerts";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/platform-overview" element={<PlatformOverview />} />
          <Route path="/ai-prompt" element={<AIPrompt />} />
          <Route path="/join-waiting-list" element={<JoinWaitingList />} />
          <Route path="/surgeon-scheduling" element={<SurgeonScheduling />} />
          <Route path="/theater-list-and-stack" element={<TheaterListAndStack />} />
          <Route path="/communication-and-alerts" element={<CommunicationAndAlerts />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
