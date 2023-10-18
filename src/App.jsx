import { Suspense, lazy } from "react";
import Header from "./components/Header/Header.jsx";
import CalendarContainer from "./components/CalendarContainer/CalendarContainer.jsx";
const ModalProvider = lazy(() => import("./components/ModalProvider.jsx"));

function App() {
  return (
    <>
      <Suspense>
        <ModalProvider/>
      </Suspense>
      <Header/>
      <CalendarContainer/>
    </>
  )
}

export default App
