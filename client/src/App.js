import HomePage from "./pages/HomePage";
import AppHome from "./pages/HomePage/index";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";
import AppProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import AppProductPage from "./pages/Product";
function App() {
  return (
    <Router>
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <Switch>
            <Route exact path="/">
              <AppHome />
            </Route>
            <Route exact path="/product">
              <AppProductPage />
            </Route>
            <Route exact path="/product/1">
              <AppProductDetail />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>

      <Layout>
        <Header>
          
        </Header>
        <Content>

        </Content>
        <Footer>

        </Footer>

      </Layout>
    </Router>
  );
}

export default App;
