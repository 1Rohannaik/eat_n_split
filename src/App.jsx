import { useState } from "react";
import "./App.css";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Rohan",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Dheeraj",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Shashank",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState([...initialFriends]);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  const [selectFriend, setSelectFriend] = useState(false)

  function handelSelectFriend() {
    setSelectFriend((selectFriend) => !selectFriend);
  }
  function FriendsList() {
    return (
      <ul>
        {friends.map((data) => {
          const { id, name, image, balance } = data;
          return (
            <div key={id}>
              <li>
                <h3>{name}</h3>
                <img src={image} alt={name} />
                {balance < 0 && (
                  <p className="red">you borrowed {Math.abs(balance)}₹</p>
                )}
                {balance > 0 && (
                  <p className="green">they borrowed {balance}₹</p>
                )}
                {balance === 0 && <p>no borrowings {balance}₹</p>}
                <Button onSelect={handelSelectFriend}>{selectFriend===false?"select":"close"}</Button>
              </li>
            </div>
          );
        })}
      </ul>
    );
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onSelect={handleShowAddFriend}>
          {showAddFriend === false ? "Add friend" : "close"}
        </Button>
      </div>
      {selectFriend && <FormSplitBill selectFriend={selectFriend} />}
    </div>
  );
}

export default App;
