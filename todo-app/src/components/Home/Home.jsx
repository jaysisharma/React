import React, { useState } from 'react';
import './todo.css';

const Home = () => {
    const [todo, setTodo] = useState();
    const [data, setData] = useState([]);
    const [done, setDone] = useState(true);

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleSubmit = () => {
        if (todo.trim() !== '') {
            setData(prevData => [...prevData, { text: todo, done: false }]);
            setTodo('');
        }
    };

    const handleToggle = (index) => {
        setData(prevData =>
            prevData.map((item, i) =>
                i === index ? { ...item, done: !item.done } : item
            )
        );
    };

    const handleDelete = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };

    const handleShow = () => {
        const finishedData = data.filter(item => item.done);
        setData(finishedData);
    };

    const handleAll = () => {
        setData(data);
    };

    const handleClick = () => {
        if (done) {
            handleShow();
            setDone(!done)
        } else {
            handleAll();
            setDone(done)
        }
    };

    return (
        <div className="mcontainer h-screen w-full flex justify-center bg-pink-100">
            <div className="container h-5/6 bg-pink-300 w-1/2 mt-5 p-5 rounded-lg flex gap-5 flex-col">
                <div className="heading">
                    <h1 className='font-bold text-center text-4xl'>MYTODO - Manage your todo in one place</h1>
                </div>
                <div className="add-task ">
                    <h2 className='mb-2 text-2xl font-bold'>Add a Todo </h2>
                    <input  type="text" name='task' className='rounded-md p-2 w-[90%] mr-5' onChange={handleChange} value={todo} />
                    <button onClick={handleSubmit} className="btn bg-purple-400  text-white font-bold text-lg px-4 py-2 rounded-md mb-8">Save</button>
                    <div className="show flex items-center gap-2">
                        <input type="checkbox" name="showss" id="showss" className='h-4 w-4' checked={!done}  onClick={handleClick} /> <span className='text-xl'>Show Finished</span>
                    </div>
                </div>
                <div className="your-todos">
                    <h2 className='text-2xl mb-2 font-bold'>Your Todos</h2>

                    <div className="list1 flex flex-col gap-3">
                    {data.map((item, index) => (
                            <div className="todo-list flex justify-between" key={index}>
                                <div className="show flex items-center gap-5">
                                    <input
                                        type="checkbox"
                                        name="show"
                                        id={`show-${index}`}
                                        className="h-4 w-4"
                                        checked={item.done}
                                        onChange={() => handleToggle(index)}
                                    />{' '}
                                    <span className={item.done ? 'strike' : ''}>{item.text}</span>
                                </div>
                                <div className="buttons flex gap-3">
                                    <button className="edit bg-purple-400 p-2">Edit</button>
                                    <button className="delete bg-purple-400 p-2" onClick={()=>{handleDelete(index)}}>Delete</button>
                                </div>
                            </div>
                        ))} 

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;
