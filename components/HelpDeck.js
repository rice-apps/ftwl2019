import SmallCard from "./SmallCard"

function HelpDeck(props) {
    return(
        <div style={{
            margin: "auto",
            height: "50%",
            width: "50%",
            flexDirection:"row", 
            display: "flex", 
            flexWrap: "wrap",
            justifyContent: "space-around",
            paddingBottom: 200,
            }}>
            
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