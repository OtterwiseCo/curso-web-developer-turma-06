import "./App.css";
import { Routes, Route } from "react-router-dom";
import PublicPage from "./routes/PublicPage";
import Layout from "./components/Layout/Layout";
import Login from "./routes/Login";
import ProtectedPage from "./routes/ProtectedPage";
import { AuthProvider, RequireAuth } from "./context/auth-context";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
