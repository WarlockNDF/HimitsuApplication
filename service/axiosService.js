import axios from "axios";

const END_POINT = "http://localhost:3000/user/auth";
const PATH = {
    user : "",
    store: ""
}

export const authentication = async (payload) => {
    return await axios({
        method: "POST",
        url: END_POINT+PATH.user,
        data: payload
    })
} 