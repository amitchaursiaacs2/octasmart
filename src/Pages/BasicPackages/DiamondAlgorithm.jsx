import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const DiamondAlgorithm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* Button to open the modal */}
      <button className="new_joining_btn" onClick={handleShow}>
        Diamond Algorithm
        <div className="hover_shape_wrapper">
          <span className="btn_hover_shape btn_hover_shape-1" />
          <span className="btn_hover_shape btn_hover_shape-2" />
          <span className="btn_hover_shape btn_hover_shape-3" />
        </div>
      </button>
      {/* Modal Content */}
      <Modal className="modal-xl" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Diamond Value Algorithm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="table-responsive">
            <table className="table pp-table-info table-striped mb-0 monthly_table">
              <tbody>
                <tr>
                  <th>Direct Referral</th>
                  <th>Downline Team</th>
                  <th>Diamond Worth</th>
                </tr>
                <tr>
                  <td>6</td>
                  <td>36</td>
                  <td>$100</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>100</td>
                  <td>$142</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>500</td>
                  <td>$542</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>1000</td>
                  <td>$1042</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>2500</td>
                  <td>$2542</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>5000</td>
                  <td>$5042</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>10000</td>
                  <td>$10042</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>100000</td>
                  <td>$100042</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DiamondAlgorithm;
