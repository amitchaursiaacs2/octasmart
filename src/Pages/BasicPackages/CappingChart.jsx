import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const CappingChart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Button to open the modal */}
      <button className="new_joining_btn border-none" onClick={handleShow}>
        Capping Chart
        <div className="hover_shape_wrapper">
          <span className="btn_hover_shape btn_hover_shape-1" />
          <span className="btn_hover_shape btn_hover_shape-2" />
          <span className="btn_hover_shape btn_hover_shape-3" />
        </div>
      </button>
      {/* Modal Content */}
      <Modal className="modal-xl" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Capping Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="table-responsive">
            <table className="table pp-table-info table-striped mb-0 monthly_table">
              <tbody>
                <tr>
                  <th>Package</th>
                  <th>Capping</th>
                </tr>
                <tr>
                  <td>$20</td>
                  <td>$100</td>
                </tr>
                <tr>
                  <td>$60</td>
                  <td>$350</td>
                </tr>
                <tr>
                  <td>$120</td>
                  <td>$750</td>
                </tr>
                <tr>
                  <td>$240</td>
                  <td>$1620</td>
                </tr>
                <tr>
                  <td>$520</td>
                  <td>$4000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CappingChart;
