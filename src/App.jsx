import ButtonGradient from "./assets/svg/ButtonGradient";
// import Button from "./Components/Button";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      {/* bg-bkg text-content */}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
