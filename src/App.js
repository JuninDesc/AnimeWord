import Popular from "./Components/popular";
import { useGlobalContext } from "./Context/global";    

function App() {
  const global = useGlobalContext();
  console.log(global)
  return (
    <div className="App">
      <Popular /> 
    </div>
  );
}
export default App;
