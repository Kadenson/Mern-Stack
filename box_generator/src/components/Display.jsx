import React from 'react'
import styles from "../modules/Display.module.css";

const Display = (props) => {
    const {boxes} = props
    return (
        <fieldset className={styles.main_container}>
            <legend>Display.jsx</legend>
            {
                boxes.map((box, index) =>{
                    return(
                        <div style={{backgroundColor: box.color, height: box.size, width:box.size}} className={styles.box} key={index}>
                        </div>
                    )
                })
            }
        </fieldset>
    )
}

export default Display