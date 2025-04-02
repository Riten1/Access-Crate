import { Footer } from "../features/Footer";
import { NavBar } from "../features/nav-bar";

function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col bg-supporting-bg-dark md:h-screen">
      <NavBar className="z-50" />

      <main className="absolute h-full w-full">
        {children}
        <Footer />
      </main>
    </div>
  );
}

export default ClientLayout;
