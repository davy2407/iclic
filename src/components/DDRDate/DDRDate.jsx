import React, { useState } from "react";
import PropTypes from "prop-types";

import { Form } from "react-bootstrap";

// import style
import "./DDRDate.module.css";

function DDRDate(date, semaineSAInDays, onSemaineSAInDaysChange) {
  return (
    <React.Fragment>
      <Form.Control
        type="date"
        placeholder="Date des dernieres regles"
        value={date}
      />
    </React.Fragment>
  );
}

DDRDate.PropTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  semaineSAInDays: PropTypes.number.isRequired,
  OnSemaineSAInDaysChange: PropTypes.function.isRequired,
};

export default DDRDate;
