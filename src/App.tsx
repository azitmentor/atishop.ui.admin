import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://apigateway.laky.ovh/gateway/product").then((p) =>
      p.json().then((p) => setData(p))
    );
  }, []);

  return (
    <div className="App">
      <table className="table table striped">
        <tbody>
          {data.map((o: any) => {
            return (
              <tr>
                <td>{o.id}</td>
                <td>{o.productName}</td>
                <td>{o.eancode}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
