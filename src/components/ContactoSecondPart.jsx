import React from 'react';

function ContactoSecondPart(){
    return(
        <div className="contacto-second-part">
            
            <form className="about-form-grid">

                <div className="about-form-input-container" id="about-form-row1-col1">
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                </div>

                <div className="about-form-input-container" id="about-form-row2-col1">
                    <label for="first_name">FIRST NAME </label>
                    <br/>
                    <input type="text" name="first_name" id="first_name" required></input>
                </div>

                <div className="about-form-input-container" id="about-form-row2-col2">
                    <label for="last_name">LAST NAME </label>
                    <br/>
                    <input type="text" name="last_name" id="last_name" required></input>
                </div>

                <div className="about-form-input-container" id="about-form-row3-col1">
                    <label for="email">EMAIL </label>
                    <br/>
                    <input type="email" name="email" id="email" required></input>
                </div>

                <div className="about-form-input-container" id="about-form-row3-col2">
                    <label for="phone"> PHONE </label>
                    <br/>
                    <input type="number" name="phone" id="phone" required></input>
                </div>

                <div className="about-form-input-container"  id="about-form-row4-col1">
                    <label for="message">MESSAGE</label>
                    <br/>
                    <input type="text" name="message" id="message" required></input>
                </div>

                <div className="about-form-input-container"  id="about-form-row5-col1">
                    <button>Submit</button>
                </div>

                <br/>
                <br/>
                
            </form>
        </div>
    );
}

export default ContactoSecondPart;