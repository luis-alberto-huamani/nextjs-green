import './steps.scss';
import classnames from 'classnames';

const StepsPost = ({ index }) => (
  <div className="steps_main_cont animated fadeIn">
    {console.log(index)}
    <ul className="step_cont">
      <li className="step">
        <p className={classnames({
          active: index === 1,
        })}>1</p>
      </li>
      <li className="step">
        <p className={classnames({
          active: index === 2,
        })}>2</p>
      </li>
      <li className="step">
        <p className={classnames({
          active: index === 3
        })}>3</p>
      </li>
    </ul>
  </div>
);

export default StepsPost;
