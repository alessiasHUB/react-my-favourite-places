import MainContent from "./components/MainContent";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import "./style.css";

function App(): JSX.Element {
  return (
    <>
      <PageHeader />
      <MainContent />
      <PageFooter />
    </>
  );
}

export default App;
