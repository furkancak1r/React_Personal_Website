import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./ContactForm.css";
import { USER_ID,TEMPLATE_ID,SERVICE_ID } from "../../emailConfig";
import { toast } from 'react-toastify';

const ContactForm = () => {
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		setIsButtonDisabled(true);
		emailjs
			.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
			.then(
				(result) => {
					document.getElementById("contact_form").reset();
					toast.success("Thank you I will get back to you as soon as possible :)");
				},
				(error) => {
					console.error(error);
					toast.error("Something went wrong, please try again later.");
				}
			)
			.finally(() => {
				setIsButtonDisabled(false);
			});
	};

	return (
		<div
			style={{
				backgroundImage:
					"url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
				width: "80%",
				height: "96%",
				boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
			}}
		>
			<div>
				<h2
					style={{ fontFamily: "Morganite Bold, sans-serif" }}
					className="message text-7xl bg-primary-600 p-2 rounded-xl text-grayscale-200 text-center rounded-br-[0%] relative shadow-2xl"
				>
					<Typewriter words={["Let's get in touch!"]} loop={true} />
					&nbsp;
				</h2>
			</div>
			<div className="w-full flex justify-center">
				<form
					id="contact_form"
					ref={form}
					method="POST"
					target="_blank"
					onSubmit={sendEmail}
					style={{ fontFamily: "Poppins, sans-serif" }}
					className="w-[80%] h-full flex flex-col gap-4 pt-4 text-grayscale-200"
				>
					<div className="w-full flex flex-col">
						<label htmlFor="firstname">First Name</label>
						<input
							className="p-[0.5em] rounded-xl text-grayscale-950"
							placeholder="Enter your First Name"
							id="firstname"
							type="text"
							name="from_name"
							required
						/>
					</div>
					<div className="w-full flex flex-col">
						<label htmlFor="lastname">Last Name</label>
						<input
							className="p-[0.5em] rounded-xl text-grayscale-950"
							placeholder="Enter your Last Name"
							id="lastname"
							type="text"
							name="from_last"
							required
						/>
					</div>
					<div className="w-full flex flex-col">
						<label htmlFor="email">E-mail</label>
						<input
							className="p-[0.5em] rounded-xl text-grayscale-950"
							placeholder="Enter your E-mail"
							autoComplete="email"
							id="email"
							type="email"
							name="from_email"
							required
						/>
					</div>
					<div className="w-full flex flex-col">
						<label htmlFor="message">Message</label>
						<textarea
							className="p-[0.5em] rounded-xl text-grayscale-950"
							id="message"
							placeholder="Enter your message..."
							name="message"
							required
						></textarea>
					</div>
					<div className="w-full flex justify-center">
						<input
							className={`w-[100px] h-[50px] bg-primary-600 rounded-xl cursor-pointer input-form ${isButtonDisabled ? "inputDisabledClass" : ""}`}
							type="submit"
							value={"Send"}
							disabled={isButtonDisabled}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
