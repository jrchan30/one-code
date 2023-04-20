import Message from '../../assets/message.svg';

const BaseCommentsIcon = ({ onClick }) => {
  return (
    <button onClick={onClick} className="flex gap-x-2 text-sm items-center">
      <img src={Message} alt="message icon" width={15} />
    </button>
  );
};

export default BaseCommentsIcon;
