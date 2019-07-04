import './step-1.scss';
import PerfilPic from './perfil-pic';
import Button from '../buttons/button';
import Date from '../form/date';
import classnames from 'classnames';
import Input from '../form/input';

const Step1 = ({
  onChange,
  values,
  onNext,
  onFile,
  out,
}) => (
  <div className={classnames({
    step1_main_cont: true,
    animated: true,
    fadeOutLeft: out,
  })}  
  >
    <div className="row">
      <div className="col-4">
        <PerfilPic onFile={onFile} pic={values.perfilPic} />
      </div>
      <div className="col-8  animated fadeInRight">
        <div className="historia_main_cont">
          <div className="form-group">
          <div className="form-group">
            <Input 
              id="name"
              value={values.name}
              label="nombre"
              color="dark"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <Input 
              value={values.lastName}
              id="lastName"
              label="Apellido"
              color="dark"
              onChange={onChange}
            />
          </div>
            <p>Historia</p>
            <textarea
              name="history"
              id="history"
              value={values.history}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <div className="birthday">
              <Date
                id="birthday"
                value={values.birthday}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="intereses">Interes</label>
            <select value={values.interest} onChange={onChange} name="intereses" id="interest">
              <option defaultValue value="muejeres">Mujeres</option>
              <option value="hombres">Hombres</option>
              <option value="ambos">Ambos</option>
              <option value="otros">Otros</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Step1;
