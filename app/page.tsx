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
        className="absolute inset-0 z-0 opacity-[0.2]" 
      />

      <main className="relative z-10 mx-auto max-w-7xl px-8 pt-22 pb-32 flex gap-12">
        
      <div className="fixed top-10 right-8 z-50">
        <Playlist />
      </div>

      <div className="shrink-0">
        <SidebarNav />
      </div>

      <div className="flex-1">
        <Header />
        <RecommendationGrid />
      </div>
      </main>

      <BackToTop />
    </div>
  );
}