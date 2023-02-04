import styles from "./Contact.module.scss"

export default function Contact(){
    return(
        <div className={styles.contact}>
            <div className={styles.contactContainer}>
                <div className={styles.contactTitle}>
                    <h2>Entre em contato.</h2>
                </div>
                <div className={styles.formSection}>
                    <form className={styles.form}>
                        <div className={styles.formWrapper}>
                            <span>Nome *</span>
                            <div className={styles.formName}>
                                <div className={styles.formNameWrapper}>
                                    <input type="text" id="name" />
                                    <label htmlFor="name">Nome</label>
                                </div>
                                <div className={styles.formNameWrapper}>
                                    <input type="text" id="lastname" />
                                    <label htmlFor="lastname">Sobrenome</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.formWrapper}>
                            <span>Email *</span>
                            <div>
                                <input type="email" id="email"/>
                            </div>
                        </div>
                        <div className={styles.formWrapper}>
                            <span>Assunto *</span>
                            <div>
                                <input type="text" id="subject"/>
                            </div>
                        </div>
                        <div className={styles.formWrapper}>
                            <span>Mensegem *</span>
                            <div>
                                <textarea name="message" id="message" cols={30} rows={10}></textarea>
                            </div>
                        </div>
                        <div className={styles.formWrapper}>
                            <button id="submitBtn">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}