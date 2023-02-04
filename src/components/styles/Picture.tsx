import styles from "./Picture.module.scss"

type TypeProps = {
    pictures: string[]
}

export default function Picture(props: TypeProps){

    const { pictures } = props

    return(
        <div className={styles.photoGroup}>
            {pictures !== null &&
                pictures.map((pic, index)=>(
                    <figure key={index}>
                        <img src={pic} alt=''/>
                    </figure>
            ))}
        </div>
    )
}