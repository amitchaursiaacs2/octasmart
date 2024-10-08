import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const ODECMIncomeChart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Button to trigger the modal */}
      <button className="new_joining_btn" onClick={handleShow}>
        Monthly Income Chart
        <div className="hover_shape_wrapper">
          <span className="btn_hover_shape btn_hover_shape-1" />
          <span className="btn_hover_shape btn_hover_shape-2" />
          <span className="btn_hover_shape btn_hover_shape-3" />
        </div>
      </button>
      {/* Modal Content */}
      <Modal className="modal-xl" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Octa De El-Classico Monthly Income Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="table-responsive">
            <table className="table pp-table-info table-striped mb-0 monthly_table">
              <tbody>
                <tr>
                  <th>Package (Rank)</th>
                  <th>Amount</th>
                  <th>1st</th>
                  <th>2nd</th>
                  <th>3rd</th>
                  <th>4th</th>
                  <th>5th</th>
                  <th>6th</th>
                  <th>7th</th>
                  <th>8th</th>
                  <th>9th</th>
                </tr>
                <tr>
                  <td>Esencia Suprema</td>
                  <td>$100</td>
                  <td>$20</td>
                  <td>$20</td>
                  <td>$20</td>
                  <td>$20</td>
                  <td>$30</td>
                  <td>$30</td>
                  <td>$30</td>
                  <td>$30</td>
                  <td>$50</td>
                </tr>
                <tr>
                  <td>Brilliant Suprema</td>
                  <td>$500</td>
                  <td>$60</td>
                  <td>$95</td>
                  <td>$120</td>
                  <td>$135</td>
                  <td>$150</td>
                  <td>$160</td>
                  <td>$170</td>
                  <td>$180</td>
                  <td>$180</td>
                </tr>
                <tr>
                  <td>Alma Radiante</td>
                  <td>$1,000</td>
                  <td>$100</td>
                  <td>$150</td>
                  <td>$150</td>
                  <td>$200</td>
                  <td>$250</td>
                  <td>$400</td>
                  <td>$400</td>
                  <td>$425</td>
                  <td>$425</td>
                </tr>
                <tr>
                  <td>Epica Victoria </td>
                  <td>$2,000</td>
                  <td>$200</td>
                  <td>$300</td>
                  <td>$300</td>
                  <td>$400</td>
                  <td>$500</td>
                  <td>$800</td>
                  <td>$800</td>
                  <td>$850</td>
                  <td>$850</td>
                </tr>
                <tr>
                  <td>Titan De Prestegio </td>
                  <td>$5,000</td>
                  <td>$500</td>
                  <td>$750</td>
                  <td>$750</td>
                  <td>$1200</td>
                  <td>$1300</td>
                  <td>$1000</td>
                  <td>$2000</td>
                  <td>$2000</td>
                  <td>$3000</td>
                </tr>
                <tr>
                  <td>Tesoro Infinito</td>
                  <td>$10,000</td>
                  <td>$1000</td>
                  <td>$1000</td>
                  <td>$1500</td>
                  <td>$1500</td>
                  <td>$2800</td>
                  <td>$3200</td>
                  <td>$4200</td>
                  <td>$4800</td>
                  <td>$5000</td>
                </tr>
                <tr>
                  <td>Poderio Selestial </td>
                  <td>$15,000</td>
                  <td>$2000</td>
                  <td>$2500</td>
                  <td>$2500</td>
                  <td>$3500</td>
                  <td>$4000</td>
                  <td>$4500</td>
                  <td>$5000</td>
                  <td>$6000</td>
                  <td>$7000</td>
                </tr>
                <tr>
                  <td>Leyanda Immortal</td>
                  <td>$20,000</td>
                  <td>$3000</td>
                  <td>$3500</td>
                  <td>$4000</td>
                  <td>$4500</td>
                  <td>$5500</td>
                  <td>$6500</td>
                  <td>$7500</td>
                  <td>$7500</td>
                  <td>$8000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ODECMIncomeChart;
