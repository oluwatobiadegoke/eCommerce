import Navigator from "../General/Navigator";

const Layout: React.FC = ({ children }) => {
  return (
    <main className="min-h-screen bg-primary-100">
      <Navigator />
      {children}
    </main>
  );
};

export default Layout;
