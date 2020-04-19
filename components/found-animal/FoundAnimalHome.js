import Title from '../util/Title';
import AnimalTopRow from '../animal/AnimalTopRow';
import ColoredCard from '../util/ColoredCard';
import './FoundAnimalHome.css';
import FrequentlyAskedQuestions from '../faq/FrequentlyAskedQuestions';

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
          cardcolor="#EE9C3B"
          letterspacing1="4px"
          lettersize1="16px"
          line1text="INJURED ADULT DEER"
          letterspacing2="4px"
          lettersize2="30px"
          line2text="512-389-4848"
        />
        <ColoredCard
          className="Cards"
          cardwidth="400px"
          cardcolor="#EE9C3B"
          letterspacing1="4px"
          lettersize1="16px"
          line1text="ALL OTHER ANIMALS"
          letterspacing2="4px"
          lettersize2="30px"
          line2text="281-259-0039"
        />
      </div>
      <FrequentlyAskedQuestions />
    </div>
  );
}

export default FoundAnimalHome;
