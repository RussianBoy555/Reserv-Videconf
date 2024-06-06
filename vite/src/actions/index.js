import axios from 'axios';

export const fetchTodo = async () => {
    const {data} = await axios.get("http://localhost:3001/data");

    return data.todos;
};


export const addJson = async(todo) => {
    const {data} = await axios.get("http://localhost:3001/data");

    const newData = [todo,...data.todos];

    await axios.post("http://localhost:3001/data", {todos: newData});
};
