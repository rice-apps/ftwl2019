import Title from '../util/Title';
import ColoredCard from '../util/ColoredCard';
import './BoardMembers.css';
import BoardMembersjson from './BoardMembers.json';
import { Flex, Box, Button } from 'rebass';

function BoardMembers() {
  return (
    <div>
      <Title
        title="Our Board Members"
        subtitle="Our Board of Directors plays a critical role in guiding Friends of Texas Wildlife to meet the needs of the community."
      />
      <Title title="Board Officers" />

      {BoardMembersjson.boardofficers.map(q => {
        return (
          <div>
            <div className="BoardOfficers">
              <ColoredCard
                className="Cards"
                cardwidth="300px"
                cardcolor="#EE9C3B"
                lettersize1="16px"
                line1text={q.position}
                lettersize2="30px"
                line2text={q.name}
              />
            </div>
          </div>
        );
      })}

      <Title title="Board Members" />

      {BoardMembersjson.boardmembers.map(i => {
        return (
          <div>
            <div className="BoardMembers">
              <ColoredCard
                className="Cards"
                cardwidth="300px"
                cardcolor="#EE9C3B"
                lettersize1="16px"
                line1text={i.position}
                lettersize2="30px"
                line2text={i.name}
              />
            </div>
          </div>
        );
      })}
      <Title title="Advisory Board Members" />

      {BoardMembersjson.advisoryboard.map(j => {
        return (
          <div>
            <div className="AdvisoryBoard">
              <ColoredCard
                className="Cards"
                cardwidth="300px"
                cardcolor="#EE9C3B"
                lettersize1="16px"
                line1text={j.position}
                lettersize2="30px"
                line2text={j.name}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BoardMembers;
