import React, { useState } from "react";

function RegistrationButton() {
    const [showRegistration, setShowRegistration] = useState(false);
  
    const handleRegistrationClick = () => {
      setShowRegistration(true);
    };
  
    return (
      <>
        <button onClick={handleRegistrationClick}>Зарегистрироваться</button>
        {showRegistration && <RegistrationForm onClose={() => setShowRegistration(false)} />}
      </>
    );
  }
  
  function RegistrationForm({ onClose }) {
    const handleSubmit = (event) => {
      event.preventDefault();
      onClose();
    };
  
    return (
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "200px", height: "150px", backgroundColor: "blue", padding: "20px", boxSizing: "border-box", borderRadius: "5px", color: "white" }}>
        <form onSubmit={handleSubmit}>
          {/* Код формы регистрации */}
          <button type="submit">Закрыть</button>
        </form>
      </div>
    );
  }