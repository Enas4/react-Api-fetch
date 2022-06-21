import { useState, useEffect } from "react";
import ApiUseEffect from "./components/Api-useEffect/Api-useEffect";
import Loading from "./components/Loading/Loading";

function App() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      setState(data);
      setLoading(false);
    } catch (err) {
      console.log("this is" + err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ApiUseEffect users={state} />
    </>
  );
}

export default App;
