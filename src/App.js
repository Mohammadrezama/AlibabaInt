import { Route, Routes } from "react-router-dom";
import { routes } from "routes/Routes";
import { Layout } from "components";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route, key) => (
          <Route key={key} {...route} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
