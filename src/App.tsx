import { Layout } from "antd";
import AppFooter from "./components/Layout/AppFooter";
import AppContent from "./components/Layout/AppContent";
import AppHeader from "./components/Layout/AppHeader";

function App() {
    return (
        <Layout>
            <AppHeader />
            <AppContent />
            <AppFooter />
        </Layout>
    );
}

export default App;
