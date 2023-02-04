import styles from './About.module.scss'

import { FaInstagram, FaTwitter } from "react-icons/fa"

export default function About(){
    return(
        <div className={styles.about}>
            <div className={styles.aboutContainer}>
                <section className={styles.aboutInfos}>
                    <h1>Zion Taylor é fotógrafo e diretor. Ele mora em Nova York, mas trabalha em toda parte.</h1>
                    <div className={styles.aboutWrapper}>
                        <div className={styles.aboutSocialMedia}>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaTwitter /></a>
                        </div>
                        <div className={styles.aboutContact}>
                            <p>email@exemplo.com</p>
                            <p>Feito com o Squarespace</p>
                        </div>
                    </div>
                </section>
                <section className={styles.aboutDesc}>
                    <p>Filho de um estilista e uma escultora, ele começou ajudando os pais em sessões de fotos de seus projetos. Não demorou para começar a ser contratado pelos amigos dos pais e, antes mesmo de terminar o colégio, ele já era muito requisitado pela comunidade criativa de Los Angeles.</p>
                    <p>A mudança para Nova York para estudar cinema trouxe contatos no mundo da música e da publicidade. Depois de se formar, com uma sólida base de clientes, ele abriu um estúdio, com foco em contar histórias visuais estéticas.</p>
                    <p>Zion teve a honra de trabalhar com as melhores marcas e revistas internacionais, além de figuras conhecidas da comunidade artística. Ele adora quando os projetos o levam a conhecer pessoas e lugares novos.</p>
                </section>
            </div>
        </div>
    )
}