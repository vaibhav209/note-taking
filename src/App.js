import AuthProvider from "./contexts/AuthContext";
import PageRoutes from "./routes/PageRoutes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <PageRoutes />
      </AuthProvider>
    </div>
  );
}
