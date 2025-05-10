import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  StarsCanvas,
  Works,
} from "./components";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Hero Section */}
        <div className="relative z-0">
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        
        {/* Main Content */}
        <div className="relative">
          {/* About Section - no padding bottom */}
          <div className="pb-0">
            <About />
          </div>
          
          {/* Experience Section - reduced padding */}
          <div className="py-4">
            <Experience />
          </div>
          
          {/* Tech Section - reduced padding */}
          <div className="py-4">
            <Tech />
          </div>
          
          {/* Works Section - reduced padding */}
          <div className="py-4">
            <Works />
          </div>
          
          {/* Feedback Section - reduced padding */}
          <div className="py-4">
            <Feedbacks />
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="relative z-0 pt-4">
          <Contact />
          <StarsCanvas />
        </div>
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
};

export default App;
