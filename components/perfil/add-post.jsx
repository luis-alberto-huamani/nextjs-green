import React, { Component } from 'react';
import {
  Spinner,
  Card,
  CardBody,
  Button,
  FormGroup,
  Input,
  Modal,
  ModalBody,
} from 'reactstrap';
import './add-post.scss';

const camera = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z" /></svg>;
const gift = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z" /></svg>;
const addUser = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" /></svg>;


const AddPost = ({ value, onSubmit, onChangeText, onChangeImg, img, modal }) => (
  <div className="add_post_cont shadow">
    <Card>
      <CardBody className="card_title">
        <div className="card_header">
          <p>Crear publicación</p>
        </div>
      </CardBody>
      <CardBody>
        <form onSubmit={onSubmit} method="POST" className="add_post_form">
          <div className="img_cont" style={
            img
              ? {background: `url("${img}")center top no-repeat`, backgroundSize: 'cover'}
              : {display:'none'}
          } />
          <FormGroup>
            <Input onChange={onChangeText} value={value} className="text_post" type="textarea" />
          </FormGroup>
          <div className="form_post_footer">
            <div className="footer_nav">
              <label title="Subir una foto" className="input_file_label" htmlFor="post_pic">
                {camera}
                <input name="post_pic" id="post_pic" type="file" onChange={onChangeImg}/>
              </label>
              <button title="Deseos" className="gift">{gift}</button>
              <button title="addUser" className="gift">{addUser}</button>
            </div>
            <Button type="submit" outline>Crear</Button>
          </div>
        </form>
      </CardBody>
    </Card>
    <Modal className="my_modal_addPost" isOpen={modal}>
      <Spinner color="primary" size="xl" />
    </Modal>
  </div>
);

export default AddPost;
