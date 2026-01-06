import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const timesReducer = (state, action) => {
  switch (action.type) {
    case "BOOK_TIME":
      return state.filter((time) => time !== action.payload);
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
