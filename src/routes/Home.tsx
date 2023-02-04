import styles from "./Home.module.scss"

import { useState, useRef } from "react"
import { Link } from "react-router-dom"

import mainImage from "../assets/images/main.jpg"
import manImage from "../assets/images/man.jpg"
import foodImage from "../assets/images/food.jpg"
import lifeImage from "../assets/images/life.jpg"

export default function Home(){

    const firstImg = useRef<HTMLImageElement>(null!)
    const secondImg = useRef<HTMLImageElement>(null!)
    const [ imageCount, setImageCount ] = useState(0)

    const handleImage = (img: string): void=>{
        if(imageCount === 0){
            secondImg.current.src = img
            secondImg.current.style.opacity = '1'
            firstImg.current.style.opacity = '0'
            setImageCount(1)
            return
        }

        firstImg.current.src = img
        firstImg.current.style.opacity = '1'
        secondImg.current.style.opacity = '0'
        setImageCount(0)
    }

    return(
        <>
            <div className={styles.landingImages}>
                <img src={mainImage} alt="" ref={firstImg} style={{opacity: 1}}/>
                <img src='' alt="" ref={secondImg}/>
            </div>
            
            <main className={styles.landing}>
                <div className={styles.landingContainer}>
                    <Link to='/gallery/fashion' 
                        onMouseOver={()=>handleImage(manImage)}
                        onMouseLeave={()=>handleImage(mainImage)}
                    >Moda</Link>
                    <Link to='/gallery/life' 
                        onMouseOver={()=>handleImage(lifeImage)}
                        onMouseLeave={()=>handleImage(mainImage)}
                    >Estilo De Vida</Link>
                    <Link to='/gallery/food' 
                        onMouseOver={()=>handleImage(foodImage)}
                        onMouseLeave={()=>handleImage(mainImage)}
                    >Comida</Link>
                </div>
            </main>
        </>
    )
}