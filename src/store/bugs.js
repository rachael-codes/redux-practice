import { createAction } from "@reduxjs/toolkit";

// Action types
const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugResolved";

// Action creators
// export const bugAdded = (description) => ({
//   type: BUG_ADDED,
//   payload: {
//     description: description,
//   },
// });

// uses Redux Toolkit's built-in action-creator method `createAction`
export const bugAdded = createAction("bugAdded"); // replaces lines 4 and 8-14

// export const bugRemoved = (description) => ({
//   type: BUG_REMOVED,
//   payload: {
//     description, // note: this is same as line 6; it's shorthand syntax
//   },
// });

export const bugRemoved = createAction("bugRemoved"); // replaces lines 5 and 19-24

// export const bugResolved = (id) => ({
//   type: BUG_RESOLVED,
//   payload: {
//     id: id,
//   },
// });

export const bugResolved = createAction("bugResolved"); // replaces lines 6 and 28-33

// Reducer
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case bugRemoved.type:
      return state.filter((bug) => bug.id !== action.payload.id);
    case bugResolved.type:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}
