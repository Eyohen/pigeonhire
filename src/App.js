import { Space } from "antd";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import SideMenu from "./components/SideMenu";
import PageContent from "./components/PageContent";
import AuthRoute from "./auth/AuthRoute";

function App() {
  return (
   <div className="App">
     <AppHeader />
      <Space className="sideandmenu">
       <SideMenu></SideMenu>
       <PageContent></PageContent>
     </Space>
       <AppFooter></AppFooter>
     {/* <AuthRoute />  */}
    </div>
  );
}

export default App;
