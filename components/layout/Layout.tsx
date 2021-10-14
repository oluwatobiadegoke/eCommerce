import Cart from "../General/Cart/Cart";
import Navigator from "../General/Navigator";

const Layout: React.FC = ({ children }) => {
  return (
    <main className="relative min-h-screen bg-primary-100 overflow-x-hidden">
      <Navigator />
      {children}
      <Cart />
    </main>
  );
};

export default Layout;
