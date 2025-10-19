// afficher le champ de saisie de nos taches
import { useState } from "react";
import styles from "./taskinput.module.css";

export const TaskInput = ( {addTaskt} ) => {
    const [taskTitle, setTaskTitle] = useState("");
    const handleInputChange = (e) => {
        setTaskTitle(e.target.value);
        
    };

    const handleAddtask = (e) =>{
        e.preventDefault();
        if (taskTitle.trim()){
            addTaskt(taskTitle);
            setTaskTitle("");
        }else{
            console.log("TaskTitle est vide");
            
        }
  
    };


    return(
        <div>
            <div className={`box ${styles.element}`}>
                <h2 className={styles.title}>Ajoute ta prochaine tâche</h2>
                <form className={styles.container} onSubmit={handleAddtask}>
                    <input 
                        type="text"
                        className={styles.input} 
                        placeholder="Indiquez un titre de tâche explicite"
                        onChange={handleInputChange}
                        value={taskTitle}
                    />
                    <button className="button-primary" type="submit">
                    Ajouter
                    </button>
                </form>
            </div>
        </div>
    );
}