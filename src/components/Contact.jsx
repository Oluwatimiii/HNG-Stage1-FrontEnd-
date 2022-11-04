import React, { useRef, useState } from "react";
import Modal from "./Modal";

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);

  const name = "Oluwatimii";

  const isEmpty = (value) => value.trim() === "";
  const isEmail = (value) => value.trim().includes("@");

  const [formValidity, setFormValidity] = useState({
    firstName: true,
    lastName: true,
    email: true,
    message: true,
  });

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const enteredFirstNameIsValid = !isEmpty(enteredFirstName);
    const enteredLastNameIsValid = !isEmpty(enteredLastName);
    const enteredMessageIsValid = !isEmpty(enteredMessage);
    const enteredEmailIsValid = isEmail(enteredEmail);

    setFormValidity({
      firstName: enteredFirstNameIsValid,
      lastName: enteredLastNameIsValid,
      email: enteredEmailIsValid,
      message: enteredMessageIsValid,
    });

    const formIsValid =
      enteredFirstNameIsValid &&
      enteredEmailIsValid &&
      enteredLastNameIsValid &&
      enteredMessageIsValid;
 
    if (formIsValid) {
        setOpenModal(true)
        event.target.reset();
    }

    if (!formIsValid) {
      return;
    }
    
  };

  return (
    <div className="mx-auto w-full flex flex-col items-center justify-center py-[3rem] md:py-[4rem] px-4">
      <div className="max-w-[720px]">
        <div>
          <h1 className="text-[#101828] text-4xl font-semibold">Contact Me</h1>
          <p className="text-[#475467] text-sm md:text-xl pt-5">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>

        <div className="mt-10">
          <form onSubmit={confirmHandler}>
            <div className="flex flex-col w-full mx-auto space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 content-center">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="firstname" className="label-tag">
                    First Name
                  </label>
                  <input
                    ref={firstNameInputRef}
                    type="text"
                    id="first_name"
                    className={`input-btn ${
                      !formValidity.firstName
                        ? "border-[1px] border-[#F89687]"
                        : ""
                    }`}
                    placeholder="Enter your first name"
                  />
                  {!formValidity.firstName && (
                    <p className="text-[#F83F23] font-semibold text-[14px]">
                      Please enter a valid first name.
                    </p>
                  )}
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="lastname" className="label-tag">
                    Last Name
                  </label>
                  <input
                    ref={lastNameInputRef}
                    type="text"
                    id="last_name"
                    className={`input-btn ${
                      !formValidity.lastName
                        ? "border-[1px] border-[#F89687]"
                        : ""
                    }`}
                    placeholder="Enter your last name"
                  />
                  {!formValidity.lastName && (
                    <p className="text-[#F83F23] font-semibold text-[14px]">
                      Please enter a valid last name.
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col space-y-2 mt-3">
                <label htmlFor="email" className="label-tag">
                  Email Address
                </label>
                <input
                  ref={emailInputRef}
                  type="email"
                  id="email"
                  className={`input-btn ${
                    !formValidity.email ? "border-[1px] border-[#F89687]" : ""
                  }`}
                  placeholder="yourname@email.com"
                />
                {!formValidity.email && (
                  <p className="text-[#F83F23] font-semibold text-[14px]">
                    Please enter a valid email.
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-2 mt-3">
                <label htmlFor="message" className="label-tag">
                  Message
                </label>
                <textarea
                  ref={messageInputRef}
                  name="message"
                  id="message"
                  className={`max-w-full h-[132px] input-btn ${
                    !formValidity.message ? "border-2 border-[#F89687]" : ""
                  }`}
                  placeholder="Send me a message and I'll reply you as soon as possible..."
                />
                {!formValidity.message && (
                  <p className="text-[#F83F23] font-semibold text-[14px]">
                    Please enter a message.
                  </p>
                )}
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  className="checkbox focus:border-2 focus:border-[#84CAFF]"
                />
                <label htmlFor="checkbox" className="text-[#475467] text-sm">
                  You agree to providing your data to {name} who may contact
                  you.
                </label>
              </div>
              <button
                type="submit"
                id="btn__submit"
                className="rounded-lg bg-[#1570EF] hover:bg-[#175CD3] text-white font-semibold w-full py-3 border-[1px] border-[#1570EF]"
              >
                Send Message
              </button>
            </div>
          </form>
          {openModal && <Modal closeModal={setOpenModal} />}
        </div>
      </div>
    </div>
  );
};

export default Contact;
