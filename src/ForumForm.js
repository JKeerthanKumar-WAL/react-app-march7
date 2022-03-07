import { useContext, useState } from "react";
import ForumReducerContext from "./ForumReducerContext";
const ForumForm = () => {
    const { dispatch } = useContext(ForumReducerContext);
    const [topic, setTopic] = useState();
    const [user, setUser] = useState();
    return (
        <div>
            <b>Enter a Topic : </b><input type="text" name="topic" onInput={(event) => { setTopic(event.target.value) }} /><br />
            <b>Select User : </b><select name="user" onInput={(event) => { setUser(event.target.value) }}>
                <option value="User 1">user1</option><br />
                <option value="User 2">user2</option><br />
                <option value="User 3">user3</option><br />
            </select><br />
            <button onClick={() => { dispatch({ type: "add", topic: topic, user: user }); }}><b>Add</b></button><br />
            <button onClick={() => { dispatch({ type: "delete5mins" }); }}><b>Delete5Minutes</b></button>
        </div>
    );
};
export default ForumForm;