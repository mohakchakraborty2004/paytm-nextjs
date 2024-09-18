import { Sidebar } from "@/components/sidebar";
import { Providers } from "../provider";



export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      
      <div className="flex">
      <div className="w-72 border-r border-slate-300 min-h-screen mr-4 pt-28">
          <div>
              <Sidebar href={"/dashboard"}  title="Home" />
              <Sidebar href={"/transfer"}  title="Transfer" />
              <Sidebar href={"/transactions"}  title="Transactions" />
          </div>
      </div>
          {children}
  </div>
        
    );
}