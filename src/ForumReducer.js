const ForumReducer = (state, action) => {
    if (action.type == "add") {
        let forumObject = {
            topic: action.topic,
            user: action.user,
            time: new Date().toGMTString()
        }
        let newForum = [...state, forumObject];
        localStorage.setItem("Forum", JSON.stringify(newForum));
        return newForum;
    }
    if (action.type == "delete") {
        let modifiedState = state.filter((val, index) => {
            if (index == action.payload) {
                return false;
            }
            return true;
        })
        localStorage.setItem("Forum", JSON.stringify(modifiedState));
        return modifiedState;
    }
    if (action.type == "delete5mins") {
        let modifiedState = state.filter((val, ind) => {
            if (new Date().getFullYear() - new Date(val.time).getFullYear() >= 1) {
                return true;
            } else if (new Date().getMonth() - new Date(val.time).getMonth() >= 1) {
                return true;
            } else if (new Date().getDay() - new Date(val.time).getDay() >= 1) {
                return true;
            } else if (new Date().getHours() - new Date(val.time).getHours() >= 1) {
                return true;
            } else if (new Date().getMinutes() - new Date(val.time).getMinutes() >5) {
                return true;
            } else {
                return false;
            }
        });
        localStorage.setItem("Forum", JSON.stringify(modifiedState));
        return modifiedState;
    }
}
export default ForumReducer;