import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

import MobileGallery from "./pages/MobileGallery";
import ProjectGallery from "./pages/ProjectGallery"; 
import BehindTheSeenGallery from "./pages/BehindTheSeenGallery";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Main page route */}
        <Route path="/" element={
          <>
            <div className='relative z-0 bg-primary'>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <Feedbacks />
              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          </>
        } />

        {/* MobileGallery route */}
        <Route path='/MobileGallery' element={<MobileGallery />} />
        <Route path='/ProjectGallery' element={<ProjectGallery />} />
        <Route path='/BehindTheSeenGallery' element={<BehindTheSeenGallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{/* <div className='relative z-0 bg-primary'>
  <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
    <Navbar />
    <Hero />
  </div>
  <About />
  <Experience />
  <Tech />
  <Works />
  <Feedbacks />
  <div className='relative z-0'>
    <Contact />
    <StarsCanvas />
  </div>
</div> */}