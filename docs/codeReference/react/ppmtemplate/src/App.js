import "./App.css";
import {
  // Component,
  useState,
} from "react";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <p>hi this is ajn404</p>
//         </header>
//       </div>
//     );
//   }
// }

function App() {
  const [person, setPerson] = useState({
    name: "ajn404",
    age: 24,
  });
  const click = () => {
    setPerson({
      name: "ajn404",
      age: ++person.age,
    });
  };
  console.log(person);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          hi this is {person.name}
          <br /> {person.age} years old
        </p>
        <button onClick={click} style={{ width: "100px", height: "30px" }}>
          setPerson
        </button>
      </header>
    </div>
  );
}

export default App;
