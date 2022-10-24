import React from 'react'

export default function Article({ title, date = "January 1, 1970", preview, minutes }) {
    function roundNearest5(num) {
        return Math.round(num / 5);
    }
    function roundNearest10(num) {
        return Math.round(num / 10);
    }

    const emoji =  ()=> {
        const emojiArray =[]
        if ({minutes} < 30){
            for (let i = 0; i <= roundNearest5(minutes ); i++) {
                emojiArray.push("☕️");
            }
            return (emojiArray.join(' ') + ' ' +  minutes  + " mins to read")
        }else{
            for (let i = 0; i <= roundNearest10( minutes ); i++) {
                emojiArray.push("🍱");
            }
            return emojiArray.join('') + " " +  minutes  + " mins to read";

        }
    }

return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <span>{emoji}</span>
    </article>
)
}
