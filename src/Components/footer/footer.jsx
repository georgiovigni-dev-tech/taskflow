// import styles from "./Footer.module.css";
import styles from "./Footer.module.css"
export const Footer = ({completedTask}) => {
    if (completedTask){
        return(
        <footer>
            <code className={styles.footer}>
                Avec Taskflow tu as supprimé {completedTask} tache
                {completedTask > 1 ? "s" : ""}
            </code>
        </footer>
    );
    }

    return null;

}