import { Header } from "../Components/header/header";
import { TaskInput } from "../Components/taskinput/taskinput";
import { TaskList } from "./taskList/TaskList";
import { Footer } from "./footer/footer";
import { useState } from "react";
export const TaskContainer = () => {
    const [tasksList, setTasksList] = useState([]);
    

    const addTaskt = (title) => {
        const newTask = {
            id: tasksList.length ? tasksList[tasksList.length -1].id +1 : 1,
            title: title,
            completed: false,
        };
        setTasksList([...tasksList, newTask])
    };

    const editTask = (id, completedValue) => {
        setTasksList(
            tasksList.map((task) =>
               task.id === id ? {...task, completed: completedValue} : task
        )
        )
    };

    const deleteTask = (id) => {
        setTasksList(tasksList.filter((task) => task.id != id));
    };



const getTaskCounts = () => {
    const completedTasks = tasksList.filter((task) => task.completed).length;
    const incompletedTasks = tasksList.length - completedTasks;
    return {
        completedTasks,
        incompletedTasks
    };
};

const { completedTasks, incompletedTasks } = getTaskCounts();


    

    return(
        <main>
           <Header /> 
           <TaskInput addTaskt={addTaskt} />
           <TaskList 
           tasksList={tasksList} 
           editTask={editTask} 
           deleteTask={deleteTask} 
           incompletedTasks={incompletedTasks}
           />
            <Footer completedTask={completedTasks} />
        </main>
    );
}