import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

import { Fragment, useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  function addUserHandler(userName, userAge) {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
