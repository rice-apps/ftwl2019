import { Heading, Card, Image, Text } from 'rebass';


function SmallCard(props) {
    return (
        <div style={{height: 300, width: 200, textAlign:"center"}}>
            <Card width={200}>
                <div style= {{
                    backgroundColor: "green",
                    borderRadius: 10,
                    height: 200,
                    width: 200,
                    margin: "auto"
                }}> 
                <Image src={props.image} sx={{margin:"auto", paddingTop: 50}}/>
                </div>

                <Heading
                sx={{
                    fontFamily: 'Helvetica',
                    fontWeight: 500,       
                    margin: "auto"   
                }}>
                    {props.heading}
                    </Heading>

                    <Text
                        fontSize={[ 1, 1, 2 ]}
                        color='primary'>
                        {props.description}
                    </Text>

            </Card>
        </div>
    )
}

export default SmallCard;