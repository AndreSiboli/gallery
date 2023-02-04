import styles from "./Error404.module.scss"

export default function Error404(){
    return(
        <div className={styles.errorContainer}>
            <h2>Essa página não foi encontrada {`:(`}</h2>
        </div>
    )
}