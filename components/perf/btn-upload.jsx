import './btn-upload.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { Spinner } from 'reactstrap';
import classnames from 'classnames';

const Upload = ({ title, onChange, loader, id }) => (
  <label
    title={title}
    htmlFor={id}
    className={classnames({
      upload_img: true,
      rm_border: loader,
    })}
  >
      {
        loader
          ? <Spinner color="successs" />
          : <FontAwesomeIcon icon={faCamera} />
      }
    <input onChange={onChange} id={id} name={id} type="file"/>
  </label>
);

export default Upload;
