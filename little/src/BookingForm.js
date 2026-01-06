import { useState } from "react";

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "BOOK_TIME",
      payload: time,
    });

    console.log({ date, time, guests, occasion });
  };

  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="">Select a time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label>Number of guests</label>
      <input
        type="number"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label>Occasion</label>
      <select
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
