import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { User } from "../models/user";
import styles from "./AutoComplete.module.css";
import AutoCompleteList from "./AutoCompleteList";

interface AutoCompleteProps {}

const AutoComplete: FunctionComponent<AutoCompleteProps> = () => {
  //UseState hook
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  // Function that executes api call
  const callToApi = () => {
    fetch("https://dummyjson.com/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.log(err));
  };

  // Input change handler
  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setName(target.value);
    //TODO: implement
  };

  // Filter everytime you change name
  useEffect(() => {
    if (name.trim().length === 0) {
      setFilteredUsers([]);
      setVisible(false);
    } else {
      setFilteredUsers(
        users.filter((user) =>
          user.username.toLowerCase().includes(name.trim().toLowerCase())
        )
      );
      setVisible(true);
    }
  }, [name, users]);

  // Select Option and clear filtered users
  const selectOption = (name: string) => {
    console.log("opcion cambiada por ", name);

    setName(name);
    setFilteredUsers([]);
    setVisible(false);
  };

  // Call to Api
  useEffect(() => {
    callToApi();
  }, []);

  // onBlur handler
  const onBlurHandler = () => {
    setTimeout(() => {
      setVisible(false);
    }, 200);
  };

  return (
    <div className={styles.container}>
      <input
        onBlur={onBlurHandler}
        className={styles.input}
        type="text"
        value={name}
        onChange={onChangeHandler}
        placeholder="Type a name"
      />
      {filteredUsers.length > 0 && visible && (
        <AutoCompleteList
          selectOption={selectOption}
          users={filteredUsers}
          name={name}
        />
      )}
    </div>
  );
};

export default AutoComplete;
