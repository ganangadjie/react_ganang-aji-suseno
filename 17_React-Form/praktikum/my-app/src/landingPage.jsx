import MainLandingPage from "./pages/mainLandingPage";
import About from "./components/about";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar></Navbar>
      <MainLandingPage></MainLandingPage>
      <About></About>
      <Footer></Footer>
    </>
  );
}
