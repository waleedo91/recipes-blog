import TopBar from "./components/topBar/TopBar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <TopBar />
      <div className='flex-grow-1'>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
