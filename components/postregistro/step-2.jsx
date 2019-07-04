import './step-2.scss';
import PerfilHeader from '../perfil-header/perfil-header';
import Input from '../form/input';
import classnames from 'classnames';

const user={
  name: 'felix',
  lastMame: 'tineo',
  perfilImg: '',
  frontPageImg: '',
  frontPageQuote: '',
}

const Step2 = ({
  onFile,
  values,
  onChange,
  out,
}) => (
  <div
    className={classnames({
      step2_main_cont: true,
      animated: true,
      fadeInRight: !out,
      fadeOutLeft: out,
    })}
  >
    <div className="row">
      <div className="col-12">
        <h2 className="portada_title">Portada</h2>
        <div className="frontPic_main_cont">
          <label htmlFor="frontPic">
            {
              values.frontPic === null
                ?(
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M384 121.941V128H256V0h6.059a24 24 0 0 1 16.97 7.029l97.941 97.941a24.002 24.002 0 0 1 7.03 16.971zM248 160c-13.2 0-24-10.8-24-24V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248zm-135.455 16c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.491-48 48-48zm208 240h-256l.485-48.485L104.545 328c4.686-4.686 11.799-4.201 16.485.485L160.545 368 264.06 264.485c4.686-4.686 12.284-4.686 16.971 0L320.545 304v112z" />
                  </svg>
                )
                : <img src={values.frontPic} />
            }
            <input onChange={onFile} name="frontPic" id="frontPic" type="file"/>
          </label>
        </div>
        <div className=" col-12 my_input_cont">
          <Input
            color="dark"
            label="Frase"
            id="frontQuote"
            type="text"
            onChange={onChange}
            value={values.frontQuote}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Step2;
