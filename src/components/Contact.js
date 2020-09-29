import { ArrowForward, LocationOn, MailOutline, Phone } from "@material-ui/icons";
import React from "react";

export default function Contact() {
	return (
		<section id="contact">
			<h1>Contact Me</h1>
			<div id="contact-details">
				<div className="contact-container">
					<div>
						<MailOutline /> coolpythoncodes@gmail.com
					</div>
					<div id="phone-contact">
						<Phone /> +234 703 806 8811
					</div>
					<div>
						<LocationOn /> 192 M.M way, Benin City, Edo State.
					</div>
				</div>
			</div>
            <div id="contact-message">
				<div className="message-container">
					<form>
						<input type="text" name="" id="" placeholder="Full Name" />
						<input type="email" name="" id="" placeholder="Email" />
						<textarea
							name=""
							id=""
							cols="30"
							rows="4"
							placeholder="Message"
						></textarea>
						<button type="submit">
							SEND MESSAGE <ArrowForward/>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
