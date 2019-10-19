import SmallCard from "./SmallCard"

function HelpDeck(props) {
    return(
        <div style={{
            margin: "auto",
            height: "60%",
            width: "60%",
            flexDirection:"row", 
            display: "flex", 
            justifyContent: "space-around"}}>
            
            {console.log(props.cards)}
            {props.cards.map((card, i) => {
            return (<SmallCard 
                key= {i}
                description= {card.description}
                heading={card.heading}
                image={card.image}
                color={card.color}/>)}
            )}

        </div>
    )
}

export default HelpDeck;