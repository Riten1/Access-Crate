import { NavBar } from "../features/nav-bar";

function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:h-screen h-full bg-supporting-bg-dark">
      <NavBar className="z-50" />
      <main className="absolute h-full w-full">{children}</main>
    </div>
  );
}

export default ClientLayout;
