import { useEffect, useState } from "react";
import { ref, onValue, set } from "firebase/database";
import { database } from "./firebase";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [buzzer1, setBuzzer1] = useState(false);
  const [buzzer2, setBuzzer2] = useState(false);

  useEffect(() => {
    const temperatureRef = ref(database, "temperature");
    const humidityRef = ref(database, "humidity");
    const buzzer1Ref = ref(database, "buzzer1");
    const buzzer2Ref = ref(database, "buzzer2");

    onValue(temperatureRef, (snapshot) => {
      setTemperature(snapshot.val() ?? 0);
    });

    onValue(humidityRef, (snapshot) => {
      setHumidity(snapshot.val() ?? 0);
    });

    onValue(buzzer1Ref, (snapshot) => {
      setBuzzer1(snapshot.val() ?? false);
    });

    onValue(buzzer2Ref, (snapshot) => {
      setBuzzer2(snapshot.val() ?? false);
    });
  }, []);

  const toggleBuzzer1 = () => {
    set(ref(database, "buzzer1"), !buzzer1);
  };

  const toggleBuzzer2 = () => {
    set(ref(database, "buzzer2"), !buzzer2);
  };

  return (
    <div className="app">

      <div className="header">
        <h1>🌱 Smart Agriculture IoT</h1>
        <p>Real-time monitoring and device control</p>
      </div>

      <div className="cards">

        <div className="card">
          <h2>🌡️ Temperature</h2>
          <div className="value">{temperature} °C</div>
        </div>

        <div className="card">
          <h2>💧 Humidity</h2>
          <div className="value">{humidity} %</div>
        </div>

        <div className="card">
          <h2>🔔 Buzzer 1</h2>

          <button onClick={toggleBuzzer1}>
            {buzzer1 ? "ON" : "OFF"}
          </button>

          <p>
            Status: {buzzer1 ? "ON 🔊" : "OFF"}
          </p>
        </div>

        <div className="card">
          <h2>🔔 Buzzer 2</h2>

          <button onClick={toggleBuzzer2}>
            {buzzer2 ? "ON" : "OFF"}
          </button>

          <p>
            Status: {buzzer2 ? "ON 🔊" : "OFF"}
          </p>
        </div>

      </div>

    </div>
  );
}

export default App;