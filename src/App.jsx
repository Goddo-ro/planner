import Header from "./components/Header/Header.jsx";
import ModalProvider from "./components/ModalProvider.jsx";
import CalendarContainer from "./components/CalendarContainer/CalendarContainer.jsx";

function App() {
  return (
    <>
      <ModalProvider/>
      <Header/>
      <CalendarContainer/>
    </>
  )
}

export default App
