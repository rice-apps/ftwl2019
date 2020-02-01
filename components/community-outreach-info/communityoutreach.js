import Title from '../util/Title.js'
import Animal from '../found-animal-single/Animal.js'
import Community from '../community-outreach-info/community.json'
import ColoredCard from '../util/ColoredCard.js'

function CommunityOutreach() {
    return (
        <div>
            <Title title="Education and Community Outreach"></Title>
            <Animal animal={Community}/>
            <ColoredCard cardcolor="orange" cardwidth="400px" line1text="Call Us" line2text="281-259-0039" />
        </div>
    );
}

export default CommunityOutreach;