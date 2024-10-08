import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const ODEClassicoChart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* Button to trigger the modal */}
      <button className="new_joining_btn" onClick={handleShow}>
        Octa De El-Classico Details
        <div className="hover_shape_wrapper">
          <span className="btn_hover_shape btn_hover_shape-1" />
          <span className="btn_hover_shape btn_hover_shape-2" />
          <span className="btn_hover_shape btn_hover_shape-3" />
        </div>
      </button>{" "}
      {/* Modal Content */}
      <Modal className="modal-xl" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Octa De El-Classico Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="table-responsive">
            <table className="table pp-table-info table-striped mb-0 monthly_table">
              <tbody>
                <tr>
                  <th>Package (Rank)</th>
                  <th>Amount </th>
                  <th>Level Eligible</th>
                  <th>Max Earning</th>
                </tr>
                <tr>
                  <td>Esencia Suprema</td>
                  <td>$100</td>
                  <td>8</td>
                  <td>$250 </td>
                </tr>
                <tr>
                  <td>Brilliante Suprema </td>
                  <td>$500</td>
                  <td>9</td>
                  <td>$1,250</td>
                </tr>
                <tr>
                  <td>Alma Radiante</td>
                  <td>$1,000</td>
                  <td>10</td>
                  <td>$2,500 </td>
                </tr>
                <tr>
                  <td>Epica Victoria </td>
                  <td>$2,000</td>
                  <td>11</td>
                  <td>$5,000</td>
                </tr>
                <tr>
                  <td>Titan De Prestegio </td>
                  <td>$5,000 </td>
                  <td>12</td>
                  <td>$12,500 </td>
                </tr>
                <tr>
                  <td>Tesoro Infinito</td>
                  <td>$10,000</td>
                  <td>13</td>
                  <td>$25,000</td>
                </tr>
                <tr>
                  <td>Poderio Selestial </td>
                  <td>$15,000</td>
                  <td>14</td>
                  <td>$37,000</td>
                </tr>
                <tr>
                  <td>Leyanda Immortal </td>
                  <td>$20,000 </td>
                  <td>15</td>
                  <td>$50,000 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ODEClassicoChart;
