import KgButton from "./KgButton";
import { DynamicFuntion,Random } from "./Dynamic";
function App() {
  return (
    <div>
      <h1>This is our first component</h1>
      <KgButton></KgButton>
      <DynamicFuntion></DynamicFuntion>
      {/* Reuseable components */}
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
    </div>
  );
}

export default App;
