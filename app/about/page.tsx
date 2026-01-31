import { BGPattern } from "../components/ui/bg-pattern";
import Header from "../components/header";
import SidebarNav from "../components/nav-bar";
import Playlist from "../components/playlist";
import BackToTop from "../components/back-to-top";
import FadeIn from "../components/fade-in";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#faf8f3] text-[#52442C]">
      
      <BGPattern 
        variant="grid" 
        fill="#52442C" 
        className="fixed inset-0 z-0 opacity-[0.2] pointer-events-none" 
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

        <div className="flex-1 w-full min-w-0">
          <Header title="about this|blog"/>

          <section className="mt-8 md:mt-16 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
  
  <FadeIn delay={0.2}>
    <div className="w-48 md:w-87.5 lg:80 shrink-0 mb-6 md:mb-0">
      <img
        src="/img/riche.png"
        alt="Riche"
        className="w-full h-auto object-contain select-none"
      />
    </div>
  </FadeIn>
            <FadeIn delay={0.4} className="flex-1 w-full">
            <div className="flex-1 bg-[#FCFCF2] border border-[#52442C]/70 rounded-[32px] md:rounded-[40px] p-6 md:p-10 shadow-sm min-h-fit md:min-h-87.5">
              <div className="space-y-6 text-base md:text-lg italic leading-relaxed tracking-normal text-[#52442C]">
                <p>
                  hello! i've always enjoyed reading, may it be classic lit, comics, manga, and any other form of literature.
                  i made this blog to share my recommendations and my thoughts on them, in hopes of helping others discover new manga they might enjoy.
                  <br /><br />
                  this blog also serves as a personal journal for me to document my manga history and the genres i've grown to lean towards over time.
                  <br /><br />
                  thank you for stopping by, and i hope you find something you like here!
                  <br />(o゜▽゜)o☆
                </p>
              </div>
            </div>
            </FadeIn>
          </section>
        </div>
      </main>

      <BackToTop />
    </div>
  );
}