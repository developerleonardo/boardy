import { Layout } from "./components/Layout";
import { BoardSidebar } from "./components/BoardSidebar";
import { Header } from "./components/Header";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import "./App.css";
import { ActiveBoard } from "./components/ActiveBoard";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <SidebarProvider>
          <BoardSidebar />
          <SidebarTrigger />
          <SidebarInset>
            <ActiveBoard />
          </SidebarInset>
        </SidebarProvider>
      </Layout>
    </>
  );
}

export default App;
