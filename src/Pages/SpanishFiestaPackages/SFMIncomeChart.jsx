import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const SFMIncomeChart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="col-md-6 mb-4 text-md-right">
        {/* Button to trigger the modal */}
        <button className="new_joining_btn" onClick={handleShow}>
          Monthly Income Chart
          <div className="hover_shape_wrapper">
            <span className="btn_hover_shape btn_hover_shape-1" />
            <span className="btn_hover_shape btn_hover_shape-2" />
            <span className="btn_hover_shape btn_hover_shape-3" />
          </div>
        </button>
      </div>
      {/* Modal Content */}
      <Modal className="modal-xl" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Spanish Fiesta Monthly Income Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="table-responsive">
            <table className="table pp-table-info table-striped mb-0 monthly_table">
              <tbody>
                <tr>
                  <th>Amount</th>
                  <th>1st</th>
                  <th>2nd</th>
                  <th>3rd</th>
                  <th>4th</th>
                  <th>5th</th>
                  <th>6th</th>
                  <th>7th</th>
                  <th>8th</th>
                </tr>
                <tr>
                  <td>$250</td>
                  <td>$125</td>
                  <td>$125</td>
                  <td>$125</td>
                  <td>$125</td>
                  <td>$125</td>
                  <td>$125</td>
                  <td>$125</td>
                  <td>$125</td>
                </tr>
                <tr>
                  <td>$450</td>
                  <td>$225</td>
                  <td>$225</td>
                  <td>$225</td>
                  <td>$225</td>
                  <td>$225</td>
                  <td>$225</td>
                  <td>$225</td>
                  <td>$225</td>
                </tr>
                <tr>
                  <td>$750</td>
                  <td>$325</td>
                  <td>$325</td>
                  <td>$325</td>
                  <td>$325</td>
                  <td>$325</td>
                  <td>$325</td>
                  <td>$325</td>
                  <td>$325</td>
                </tr>
                <tr>
                  <td>$850</td>
                  <td>$425</td>
                  <td>$425</td>
                  <td>$425</td>
                  <td>$425</td>
                  <td>$425</td>
                  <td>$425</td>
                  <td>$425</td>
                  <td>$425</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SFMIncomeChart;
