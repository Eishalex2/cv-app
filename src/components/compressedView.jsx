import { PropTypes } from 'prop-types';
import editIcon from '../assets/edit.svg';
import trashIcon from '../assets/trash.svg';

export default function Compressed({text, handleEdit, handleDelete}) {
  return (
    <div className="compressed">
      <h2>{text}</h2>
      <ul>
        <li onClick={handleEdit}>
          <img src={editIcon} alt="edit icon" />
        </li>
        <li onClick={handleDelete}>
          <img src={trashIcon} alt="trash icon" />
        </li>
      </ul>
    </div>

  )
}

Compressed.propTypes = {
  text: PropTypes.string,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
}