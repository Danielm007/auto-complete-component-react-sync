import {
  ChangeEvent,
  FunctionComponent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { callToApi } from "../../lib/helpers";
import { User } from "../../models/user";
import styles from "./AutoComplete.module.css";
import AutoCompleteList from "./AutoCompleteList";

interface AutoCompleteProps {}

const AutoComplete: FunctionComponent<AutoCompleteProps> = () => {
  //UseState hooks
  // State for users
  const [users, setUsers] = useState<User[]>([]);
  // State for name
  const [name, setName] = useState<string>("");
  // State for showing autcompleteOptions
  const [visible, setVisible] = useState<boolean>(false);
  // State for users filtered
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  // useRef hook
  const wrapper = useRef<HTMLDivElement>(null);

  // Input change handler
  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setName(target.value);
  };

  //Hide menu when it's clicked outside the input
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // Cleaning listener on the cleanup function to avoid unexpected behavior
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function that is going to hide menu when it's clicked anywhere outside the input
  const handleClickOutside = (event: Event) => {
    const { current: wrap } = wrapper;
    if (wrap && !wrap.contains(event.target as HTMLDivElement)) {
      setVisible(false);
    }
  };

  // Filter everytime you change name
  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.username.toLowerCase().includes(name.trim().toLowerCase())
      )
    );
  }, [name, users]);

  // Select Option and clear filtered users
  const selectOption = (name: string) => {
    setName(name);
    setVisible(false);
  };

  // Call to Api
  useEffect(() => {
    callToApi("https://dummyjson.com/users", "GET")
      .then((data) => {
        if (data !== null) {
          setUsers(data as User[]);
        }
      })
      .catch((err) => alert(err.message));
  }, []);

  //Handle Input Click and show options
  const InputClickHandler = (event: MouseEvent<HTMLInputElement>) => {
    setVisible(true);
  };

  return (
    <div className={styles.container} ref={wrapper}>
      <input
        className={styles.input}
        onClick={InputClickHandler}
        type="text"
        value={name}
        onChange={onChangeHandler}
        placeholder="Type a name"
      />
      {visible && (
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
