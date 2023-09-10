import UserProvider from "./contexts/UserContext";
import PageRoutes from "./routes/PageRoutes";
import "./styles.css";

export default function App() {
  return (
    <UserProvider>
      <PageRoutes />
    </UserProvider>
  );
}
