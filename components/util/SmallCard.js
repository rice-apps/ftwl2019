import { Heading, Card, Image, Text } from 'rebass';
import Link from 'next/link';

function SmallCard(props) {
  return (
    <div style={{ cursor: "pointer", padding: 20, height: 300, width: 200, textAlign: 'center' }}>
      <Link href={props.link}>
      <Card width={200}>
        <Image src={props.image} sx={{ margin: 'auto', paddingTop: 50 }} />
        <Heading
          sx={{
            fontFamily: 'Helvetica',
            fontWeight: 500,
            margin: 'auto',
          }}>
          {props.heading}
        </Heading>
        <Text fontSize={[1, 1, 2]} color="primary">
          {props.description}
        </Text>
      </Card>
      </Link>
    </div>
  );
}

export default SmallCard;
