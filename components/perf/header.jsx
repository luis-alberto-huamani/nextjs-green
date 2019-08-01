import React, { Component } from 'react';
import './header.scss';
import Upload from './btn-upload';
import classsnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserCheck, faUserClock } from '@fortawesome/free-solid-svg-icons';
import { Spinner } from 'reactstrap';
import {} from 'reactstrap';


const PerfilHeader = ({
  user,
  action,
  frontPageLoader,
  perfilLoader,
  owner,
  friendReqLoader,
}) => (
  <header className="perfil_header_main_cont container-fluid shadow">
  <div
    className={classsnames({
      frontPageImg: true,
      blur: frontPageLoader
    })}
    style={{
      background: '#669f09',
      backgroundImage: `url(${user.frontPageImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
    }}
  >
    
  </div>
  <div className="row">
    <div className="col-12">
      {
        owner && (
          <Upload
          id= "frontPage"
          title="Cambiar foto de portada"
          onChange={action.handleChangeImg}
          loader={frontPageLoader}
        />
        )
      }
    </div>
    <div className="col-8">
      <button disabled={!owner} title={owner ? "Cambiar pensamiento": ''} onClick={action.onQuote} className="frontPageQuote">
        <p>{user.frontPageQuote}</p>
      </button>
    </div>
    <div className="col-4" style={{ position: 'relative' }}>
      <div className="person_cont shadow">
        <div className="btn_perfil_img">
        {
          owner && (
            <Upload
            id="perfil"
            title="Cambiar foto de perfil"
            onChange={action.handleChangeImg}
            loader={perfilLoader}
          />
          )
        }
        </div>
        <img src={user.perfilImg} alt="" className="img-fluid img-thumbnail"/>
        <div className="perfil_request_name px-1">
        {console.log(user.friendReqSent)}
          <span>{user.fullName}</span>
          {
            !owner && (
              friendReqLoader
                ? <Spinner color='success' />
                : user.friendReqSent === 'sent'
                  ? <button onClick={action.cancelFriendReq} title="Cancelar solicitud" id={user.id}><FontAwesomeIcon id={user.id} icon={faUserClock} /></button>
                  : user.friendReqSent === 'accepted'
                    ? <button title="Eliminar amigo" id={user.id} onClick={action.onConfirmation}><FontAwesomeIcon id={user.id} icon={faUserCheck} /></button>
                    : user.friendReqSent === 'wating'
                      ? <button onClick={action.accpetFriend} id={user.id} className="btn_aceptar" title="Aceptar solicitud de amistad">Aceptar</button>
                      : <button title="Enviar solicitud de amistad" id={user.id} onClick={action.onFriendReq}><FontAwesomeIcon id={user.id}  icon={faUserPlus} /></button>)
          }
        </div>
      </div>
    </div>
    <div className="perfil_header_footer" />
  </div>
</header>
);

export default PerfilHeader;
