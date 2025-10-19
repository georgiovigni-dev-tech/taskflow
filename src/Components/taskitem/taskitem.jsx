import styles from "./tasktitem.module.css"
export const TaskItem = ({task, editTask, deleteTask}) => {


    return(
       <li 
       className={`${styles.container} ${
        task?.completed ? styles.success : styles.default
        }`}
       onClick={() => editTask(task.id, !task.completed)}
       >
        <div className={styles.item}>
            <div className={`${styles.id}  ${task?.completed ? styles.idSuccess : styles.idDefault}`}>{task.id}</div>
            <div className={task?.completed ? styles.contentSuccess : styles.contentDefault}>{task.title}</div>
        </div > 
        <button 
        onClick={(e) => {
        e.stopPropagation();
        deleteTask(task.id);
        }} 
        className="button-primary">X</button> 
       </li>
    );
}