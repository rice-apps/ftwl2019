import Title from '../util/Title';
import AnimalTopRow from '../animal/AnimalTopRow';
import ColoredCard from '../util/ColoredCard';
import './FoundAnimalHome.css';

function FoundAnimalHome() {
  return (
    <div>
      <Title title="Found an animal?" subtitle="Don't panic! We can help." />
      <AnimalTopRow />
      <Title title="General Information" />
      <div className="ContactCards">
        <ColoredCard
          className="Cards"
          cardwidth="400px"
          cardcolor="orange"
          line1text="INJURED ADULT DEER"
          line2text="512-389-4848"
        />
        <ColoredCard
          className="Cards"
          cardwidth="400px"
          cardcolor="orange"
          line1text="ALL OTHER ANIMALS"
          line2text="281-259-0039"
        />
      </div>
    </div>
  );
}

export default FoundAnimalHome;
