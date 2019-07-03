import React from 'react';
import Cleave from 'cleave.js/react';
import classnames from 'classnames';
import './form.scss';

const InputDate = ({
  value,
  onChange,
  onFocus,
  id,
  color,
}) => (
  <div className="input_date_cont">
    <div className={classnames({ light: color === 'light' })}>
      <span>Cumpleaños</span>
      <Cleave
        onChange={onChange}
        onFocus={onFocus}
        value={value}
        name="date"
        id={id}
        placeholder="DD/MM/YYYY"
        options={{ date: true, datePattern: ['d', 'm', 'Y'] }}
      />
    </div>
  </div>
);

export default InputDate;
