import { Modal, ModalBody } from 'reactstrap';
import './quote.scss';

const Quote = ({ isOpen, onQuote, handleChange, quote  }) => (
  <Modal isOpen={isOpen}>
  {
    isOpen && (
      <ModalBody style={{ padding: "5px 10px" }}>
        <div className="btn_close">
          <button onClick={onQuote}>X</button>
        </div>
        <form className="formQuote">
          <textarea id="frontPageQuote" onChange={handleChange} value={quote} />
          <div className="quote_buttons_cont">
            <button type="submit"  className="buttonQuote">guardar</button>
          </div>
        </form>
      </ModalBody>
    )
  }
</Modal>
);

export default Quote;
