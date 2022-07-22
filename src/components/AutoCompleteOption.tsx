import { FunctionComponent, MouseEvent } from "react";
import { User } from "../models/user";
import styles from "./AutoCompleteOption.module.css";

interface AutoCompleteOptionProps {
  user: User;
  name: string;
  selectOption: (name: string) => void;
}

const AutoCompleteOption: FunctionComponent<AutoCompleteOptionProps> = ({
  user: { username, image },
  name,
  selectOption,
}) => {
  //Divide username word into parts
  const wordDivided = username.split(new RegExp(`(${name})`, "gi"));
  //Build the text that is going to highlight the matches
  const text = (
    <span>
      {wordDivided.map((part, i) =>
        part.toLowerCase() === name.toLowerCase() ? (
          <mark key={i}>{part}</mark>
        ) : (
          part
        )
      )}
    </span>
  );

  // Click handler
  const onClickHandler = (event: MouseEvent<HTMLLIElement>) => {
    console.log("Cambiado por ", username);

    event.preventDefault();
    selectOption(username);
  };

  return (
    <li className={styles.option} onClick={(e) => onClickHandler(e)}>
      <div className={styles.image}>
        <img src={image} alt={username} />
      </div>
      <p>{text}</p>
    </li>
  );
};

export default AutoCompleteOption;
