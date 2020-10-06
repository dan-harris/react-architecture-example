import * as React from "react";
import { render } from "react-dom";
import { Provider, useSelector, useDispatch } from "react-redux";

import "./styles.css";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Page />
  </Provider>
);

const Page = () => {
  const [newPerson, setNewPerson] = React.useState("");
  const updateNewPerson = () => (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewPerson(e.currentTarget.value);

  const people: Person[] = useSelector((state: AppState) => state.people);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addPerson(newPerson));
    setNewPerson("");
  };

  const dispatchNewPerson = (id: number) => () => {
    dispatch(removePerson(id));
  };

  return (
    <div>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <span>{person.name}</span>
            <button onClick={dispatchNewPerson(person.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter name"
          value={newPerson}
          onChange={updateNewPerson()}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
