import Title from '../util/Title';
import ColoredCard from '../util/ColoredCard';
import './BoardMembers.css';
import BoardMembersjson from './BoardMembers.json';

function BoardMembers() {
  return (
    <div>
      <Title
        title="Our Board Members"
        subtitle="Our Board of Directors plays a critical role in guiding Friends of Texas Wildlife to meet the needs of the community."
      />
      <Title title="Board Officers" />

      <div className="BoardOfficers">
      {BoardMembersjson.boardofficers.map(q => {
        return (
          <div>
              <ColoredCard
                className="Cards"
                cardwidth="400px"
                cardcolor="orange"
                line1text={q.position}
                line2text={q.name}
              />
          </div>
        );
      })}
      </div>

      <Title title="Board Members" />

      <div className="BoardMembers">
      {BoardMembersjson.boardmembers.map(i => {
        return (
          <div>
              <ColoredCard
                className="Cards"
                cardwidth="400px"
                cardcolor="orange"
                line1text={i.position}
                line2text={i.name}
              />
          </div>
        );
      })}
      </div>
      <Title title="Advisory Board Members" />

      <div className="AdvisoryBoard">
      {BoardMembersjson.advisoryboard.map(j => {
        return (
          <div>
              <ColoredCard
                className="Cards"
                cardwidth="400px"
                cardcolor="orange"
                line1text={j.position}
                line2text={j.name}
              />
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default BoardMembers;
