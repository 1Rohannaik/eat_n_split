import { useState } from "react";
import Button from "./Button";

function FormSplitBill() {
  const [bill, setBill] = useState("");
  const [paidByUsear, setPaidByUsear] = useState("");
  const paidByFriend = bill ? bill - paidByUsear : "";
  const [whoIsPaying, setWhoIsPaying] = useState("usear");
  return (
    <form className="form-split-bill">
      <h2>split a bill with your group</h2>

      <label>💰Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>💰Your expense</label>
      <input
        type="text"
        value={paidByUsear}
        onChange={(e) => setPaidByUsear(Number(e.target.value))}
      />

      <label>💰friends expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>💰who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="usear">you</option>
        <option value="friend">dheeraj</option>
        <option value="friend">Shashank</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
