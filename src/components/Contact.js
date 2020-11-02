import {
	ArrowForward,
	LocationOn,
	MailOutline,
	Phone,
} from "@material-ui/icons";
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
						<LocationOn /> Carlton Gate Estate, Chevron Office Drive, Lekki,
						Lagos
					</div>
				</div>
			</div>
			<div id="contact-message">
				<div className="message-container">
					<form
						name="contact"
						method="POST"
						netlify-honeypot="bot-field"
						data-netlify="true"
					>
						<p class="hidden">
							<label>
								Don’t fill this out if you're human: <input name="bot-field" />
							</label>
						</p>
						<input type="hidden" name="form-name" value="contact" />
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
							<span>SEND MESSAGE</span> <ArrowForward />
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
