import { BGPattern } from "./components/ui/bg-pattern";
import Header from "./components/header";
import SidebarNav from "./components/nav-bar";
import RecommendationGrid from "./components/recommendation-grid";
import BackToTop from "./components/back-to-top";
import Playlist from "./components/playlist";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#faf8f3] text-[#52442C]">
      
      <BGPattern 
        variant="grid" 
        fill="#52442C" 
        className="fixed inset-0 z-0 opacity-[0.2]" 
      />

      <main className="
        relative z-10 mx-auto max-w-7xl 
        px-4 md:px-8               
        pt-10 md:pt-22             
        flex flex-col md:flex-row  
        gap-8 md:gap-12     
        pb-18 md:pb-26      
    ">
        
      <div className="fixed top-6 right-4 md:top-10 md:right-8 z-50">
          <Playlist />
      </div>

      <div className="w-full md:w-auto shrink-0 flex items-start">
        <SidebarNav />
      </div>

      <div className="flex-1 w-full">
        <Header />
        <RecommendationGrid />
      </div>
      </main>

      <BackToTop />
    </div>
  );
}