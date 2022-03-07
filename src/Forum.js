import { useReducer } from "react";
import ForumForm from "./ForumForm";
import ForumReducerContext from "./ForumReducerContext";
import ForumList from "./ForumList";
import ForumReducer from "./ForumReducer";
const Forum = () => {
    const initialValue = []
    const [state, dispatch] = useReducer(ForumReducer, initialValue);
    const reducerValue = { state, dispatch };
    return (
        <div className="App-div">
            <h1>Forum App</h1>
            <ForumReducerContext.Provider value={reducerValue}>
                <ForumForm />
                <ForumList />
            </ForumReducerContext.Provider>
        </div>
    );
};
export default Forum;