import './step-3.scss';
import PerfilHeder from '../perfil-header/perfil-header';

const Step3 = ({ user }) => (
  <div className="step3_main_cont animated fadeInRight">
    <div className="row">
      <h2>¿Confirmas tus datos?</h2>
      <div className="col-12">
        <PerfilHeder user={user} />
      </div>
    </div>
  </div>
);

export default Step3;
