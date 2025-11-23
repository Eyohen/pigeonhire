import Header from "../components/header";
import Sidebar from "../components/sidebar";

export default function UserLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <div className="flex-1 bg-white px-12 py-8 overflow-auto">{children}</div>
      </div>

      <div className="hidden max-[565px]:flex max-[565px]:items-center max-[565px]:justify-center max-[565px]:min-h-screen max-[565px]:p-8 max-[565px]:text-center">
        View on desktop for better experience
      </div>
    </div>
  );
}
