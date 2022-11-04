import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ closeModal }) => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center mx-auto fixed top-0 left-0 w-screen h-screen z-[1] bg-[#f1f0f0a9]">
        <div className="text-white flex flex-col items-center justify-center max-w-[80%] rounded-lg mx-5 bg-[#1570EF] shadow-sm p-4">
          <iframe src="https://embed.lottiefiles.com/animation/96237"></iframe>
          <div className="text-center text-[13px] mt-3">
            <h1>Form Submission Successful.</h1>
          </div>
          <div className="py-2">
            <p className="text-[13px] font-1xl px-6 text-center">
              Thank you for choosing HNG, a submission feedback will be sent your
              email.
            </p>
          </div>
          <div className="flex items-center justify-between mt-2 space-x-2">
            <div onClick={() => closeModal(false)}>
              <button className="modal-tag">Close</button>
            </div>
            <Link to="/" className="modal-tag">
              Home Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
