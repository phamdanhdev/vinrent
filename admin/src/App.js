import "./App.css";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppDashboardFooter from "./components/Footer";
import AppDashboardHeader from "./components/Header";
import AppMenu from "./components/Menu";
import AppHomePage from "./pages/HomePage";
import AppProductDetailPage from "./pages/ProductPage/ProductDetailPage";
import AppProductPage from "./pages/ProductPage/ProductList";
import AppProductHidePage from "./pages/ProductPage/ProductHide";
import AppContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <Layout className="admin">
        <Header>
          <AppDashboardHeader />
        </Header>
        <Content style={{ display: "flex", flexDirection: "row nowrap" }}>
          <AppMenu />
          <div style={{ width: "100%", backgroundColor: "white" }}>
            <Switch>
              <Route exact path="/">
                <AppHomePage />
              </Route>
              <Route exact path="/product">
                <AppProductPage />
              </Route>
              <Route exact path="/product/hide">
                <AppProductHidePage />
              </Route>
              <Route exact path="/product/1">
                <AppProductDetailPage />
              </Route>
              <Route exact path="/contact">
                <AppContactPage />
              </Route>
              <Route exact path="/*">
                <div>Page not found!</div>
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer>
          <AppDashboardFooter />
        </Footer>
      </Layout>
    </Router>
  );
}
