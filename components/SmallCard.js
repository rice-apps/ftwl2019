import { Heading, Card, Image } from 'rebass';


function SmallCard(props) {
    return (
        <div>
            <Card width={256}>
                <div style= {{
                    backgroundColor: "green",
                    borderRadius: 10,
                    height: 150,
                    width: 150
                }}> 
                <Image src={props.image} />
                </div>

                <Heading
                sx={{
                    fontFamily: 'Helvetica',
                    fontWeight: 500,          
                }}>
                    {props.heading}
                    </Heading>
            </Card>
        </div>
    )
}

export default SmallCard;