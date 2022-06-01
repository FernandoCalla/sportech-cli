import _ from 'lodash';
import clsx from 'clsx';

export const orderStatuses = [
  {
    id: 1,
    name: 'futbol',
    color: 'bg-red-500 text-white',
  },
  {
    id: 2,
    name: 'basquet',
    color: 'bg-green-800 text-white',
  },
  {
    id: 3,
    name: 'voley',
    color: 'bg-purple-700 text-white',
  },
  {
    id: 4,
    name: 'tenis',
    color: 'bg-blue-700 text-white',
  }
];

function LabelSports(props) {
  return (
    <div
      className={clsx(
        'inline text-12 font-semibold py-1 px-6 truncate h-2',
        _.find(orderStatuses, { name: props.name }).color
      )}
    >
      {props.name}
    </div>
  );
}

export default LabelSports;
