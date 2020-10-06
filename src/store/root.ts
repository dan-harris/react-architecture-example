import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore, combineReducers, Store, Dispatch } from "redux";

type ActionCreator<T> = (store: Store) => (args: T) => void;

type Person = {
  id: number;
  name: string;
  favouriteFood: string;
};

type AppState = {
  people: Person[];
};

export const addPerson: ActionCreator<string> = (store) => (personName) => {
  store.dispatch({
    type: "AddPerson",
    payload: personName
  });
};

function removePerson(id: number) {
  return {
    type: "RemovePerson",
    payload: id
  } as const;
}

type Actions =
  | {
      type: "ADD_PERSON";
      payload: string;
    }
  | {
      type: "REMOVE_PERSON";
      payload: string;
    };

function peopleReducer(state: Person[] = [], action: Actions) {
  switch (action.type) {
    case "AddPerson":
      return state.concat({ id: state.length + 1, name: action.payload });
    case "RemovePerson":
      return state.filter((person) => person.id !== action.payload);
    default:
      neverReached(action);
  }
  return state;
}

function neverReached(never: never) {}

const rootReducer = combineReducers<AppState>({
  people: peopleReducer
});

function configureStore(): Store<AppState> {
  const store = createStore(rootReducer, undefined);
  return store;
}
