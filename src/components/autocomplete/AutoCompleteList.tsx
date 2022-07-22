import { FunctionComponent } from "react";
import AutoCompleteOption from "./AutoCompleteOption";
import styles from "./AutoCompleteList.module.css";
import { User } from "../../models/user";

interface AutoCompleteListProps {
  users: User[];
  name: string;
  selectOption: (name: string) => void;
}

const AutoCompleteList: FunctionComponent<AutoCompleteListProps> = ({
  users,
  name,
  selectOption,
}) => {
  return (
    <ul className={styles.ul}>
      {users.map((user) => (
        <AutoCompleteOption
          selectOption={selectOption}
          key={user.id}
          user={user}
          name={name}
        />
      ))}
    </ul>
  );
};

export default AutoCompleteList;
