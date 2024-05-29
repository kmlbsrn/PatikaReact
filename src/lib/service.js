import axios from "axios";

async function getData(userId) {
    try {
        const [user, posts ] = await Promise.all([
            axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        ]);

        const data = { ...user.data, ...posts.data };
        return data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return {};
    }
}

export { getData };
