import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./assets/Components/Header/Header";
import Main from "./assets/Components/Main/Main";

function App() {
  const [data, setData] = useState({});
  const [isReady, setIsReady] = useState({
    status: false,
    value: "Is loading...please wait a few moments...",
  });
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://site--delivroo-back--tzmxcvqjqbzq.code.run/getdata"
      );

      setData(data);

      const newIsReady = { ...isReady };
      newIsReady.status = true;

      setIsReady(newIsReady);
    };
    fetchData();
  }, []);

  return (
    <>
      {isReady.status === true ? (
        <div className="body">
          <Header />
          <Main data={data} />
        </div>
      ) : (
        <div className="isReady">
          <p>{isReady.value}</p>
        </div>
      )}
    </>
  );
}

export default App;
