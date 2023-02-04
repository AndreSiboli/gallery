import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Picture from "../../components/styles/Picture"

import styles from "./Gallery.module.scss"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

//Images
import image1 from "../../assets/images/life/1.jpg"
import image2 from "../../assets/images/life/2.jpg"
import image3 from "../../assets/images/life/3.jpg"
import image4 from "../../assets/images/life/4.jpg"
import image5 from "../../assets/images/life/5.jpg"
import image6 from "../../assets/images/life/6.jpg"
import image7 from "../../assets/images/life/7.jpg"
import image8 from "../../assets/images/life/8.jpg"
import image9 from "../../assets/images/life/9.jpg"
import image10 from "../../assets/images/life/10.jpg"
import image11 from "../../assets/images/life/11.jpg"
import image12 from "../../assets/images/life/12.jpg"
import image13 from "../../assets/images/life/13.jpg"
import image14 from "../../assets/images/life/14.jpg"


export default function Fashion(){

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])

    const [pictures, setPictures] = useState([image14, image9, image2, image3, image4, image5, image6, image7, image8, image10, image11, image12, image13, image1])

    return(
        <div className={styles.sectionPhoto}>
            <div className={styles.photoContainer}>
                <div className={styles.photoWrapper}>
                    <Picture pictures={pictures}/>
                        
                </div>

                <div className={styles.photoDesc}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className={`${styles.photoButton} ${styles.photoBoth}`}>
                    <Link to='../fashion'><FaAngleLeft/> Moda</Link>
                    <Link to='../food'>Comida <FaAngleRight/></Link>
                </div>
                
            </div>
        </div>
    )
}