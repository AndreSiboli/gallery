import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Picture from "../../components/styles/Picture"

import styles from "./Gallery.module.scss"
import { FaAngleRight} from 'react-icons/fa'

//Images
import image1 from "../../assets/images/fashion/1.jpg"
import image2 from "../../assets/images/fashion/2.jpg"
import image3 from "../../assets/images/fashion/3.jpg"
import image4 from "../../assets/images/fashion/4.jpg"
import image5 from "../../assets/images/fashion/5.jpg"
import image6 from "../../assets/images/fashion/6.jpg"
import image7 from "../../assets/images/fashion/7.jpg"
import image8 from "../../assets/images/fashion/8.jpg"

export default function Fashion(){

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])

    const [pictures, setPictures] = useState([image1, image2, image3, image4, image5, image6, image7, image8])

    return(
        <div className={styles.sectionPhoto}>
            <div className={styles.photoContainer}>
                <div className={styles.photoWrapper}>
                    <Picture pictures={pictures} />

                </div>

                <div className={styles.photoDesc}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className={`${styles.photoButton} ${styles.photoForw}`}>
                    <Link to='../life'>Estilo de Vida<FaAngleRight/></Link>
                </div>
                
            </div>
        </div>
    )
}