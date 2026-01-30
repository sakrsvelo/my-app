import { BGPattern } from "../components/ui/bg-pattern";
import Header from "../components/header";
import SidebarNav from "../components/nav-bar";
import Playlist from "../components/playlist";
import BackToTop from "../components/back-to-top";

export default function AboutPage() {
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
          <Header title="about this blog" />

          <section className="mt-16 flex items-start gap-12">
            <div className="w-1/4 shrink-0">
              <img
                src="/img/riche.png"
                alt="Riche"
                className="w-full h-auto object-contain select-none"
              />
            </div>

            <div className="flex-1 bg-[#FCFCF2] border border-[#52442C]/70 rounded-[40px] p-10 shadow-sm min-h-87.5">
              <div className="space-y-6 text-lg italic font-stretch-100% leading-relaxed tracking-normal text-[#52442C]">
                <p>i like reading :] i like reading :] i like reading :] i like reading :] i like reading :] i like reading :]
                  i like reading :] i like reading :] i like reading :] i like reading :] i like reading :] i like reading :]
                  i like reading :] i like reading :] i like reading :] i like reading :] i like reading :] i like reading :]
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <BackToTop />
    </div>
  );
}