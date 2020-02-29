import Title from '../util/Title';
import ImageText from '../util/ImageText';

newsAndEventsJSON = {
  items: [
    {
      title: 'April Fundraiser',
      date: 'Thursday, April 12, 2019',
      preview: 'hello this is really a short preview of our blog post.',
    },
  ],
};

function NewsAndEventsBody() {
  // return <ImageText title="April Fundraiser" date="Thursday, April 12, 2019" preview="hello this is really a short preview of our blog post." />;
  return (
    <div>
      {newsAndEventsJSON.items.map(x => {
        <ImageText title={x.title} date={x.date} preview={x.preview} />
      })}
    </div>
  );
}

export default NewsAndEventsBody;
