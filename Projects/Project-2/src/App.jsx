import "./App.css";
import { Header } from "./components/Header";
import {H1} from "./components/H1";
import CurrentTime from "./components/H2";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div>
        <center>
          <Header />
          <H1/>
          <CurrentTime/>
        </center>
      </div>
    </>
  );
}
export default App;
