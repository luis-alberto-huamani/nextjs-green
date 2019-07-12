import React, { Component } from 'react';
import { onLogin } from '../../store/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './perfil.scss';
import PerfilHeader from './perfil-header';
import PerfilNav from './perfil-nav';


class Perfil extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onLogin } = this.props;
    onLogin(true);
  }

  render() {
    const { user } = this.props;
    return(
      <div className="perfil_main_cont">
        <PerfilHeader user={user} />
        <PerfilNav user={user} id={user._id} posts={user.posts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ login: state.login });
const mapDispatchToProps = dispatch => bindActionCreators({ onLogin }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Perfil);
