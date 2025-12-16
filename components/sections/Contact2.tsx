'use client'

import { useState } from "react"

export default function Contact2() {
	const [loading, setLoading] = useState(false)
	const [status, setStatus] = useState("")

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setLoading(true)
		setStatus("")

		const form = e.currentTarget

		const data = {
			name: (form.elements.namedItem("name") as HTMLInputElement).value,
			email: (form.elements.namedItem("email") as HTMLInputElement).value,
			subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
			purpose: (form.elements.namedItem("purpose") as HTMLInputElement).value,
			message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
		}

		const res = await fetch("/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})

		const result = await res.json()
		setLoading(false)
		setStatus(result.message)
		form.reset()
	}

	return (
		<section id="contact" className="section-contact-2 position-relative pb-60 overflow-hidden">
			<div className="container position-relative z-1">
				<div className="row align-items-center">

					{/* LEFT: CONTACT FORM */}
					<div className="col-lg-7 pb-5 pb-lg-0">
						<div className="position-relative">
							<div className="position-relative z-2">
								<h3 className="text-primary-2 mb-3">Let’s Connect</h3>
								<p className="text-300 mb-4">
									Open to internships, job opportunities, collaborations, or queries.
								</p>

								<form onSubmit={handleSubmit}>
									<div className="row g-3">

										<div className="col-md-6">
											<input
												name="name"
												required
												className="form-control bg-3 border border-1 rounded-3"
												placeholder="Your name"
											/>
										</div>

										<div className="col-md-6">
											<input
												name="email"
												type="email"
												required
												className="form-control bg-3 border border-1 rounded-3"
												placeholder="Your email"
											/>
										</div>

										<div className="col-md-6">
											<input
												name="subject"
												required
												className="form-control bg-3 border border-1 rounded-3"
												placeholder="Subject"
											/>
										</div>

										<div className="col-md-6">
											<input
												name="purpose"
												className="form-control bg-3 border border-1 rounded-3"
												placeholder="Purpose (Internship / Job / Query)"
											/>
										</div>

										<div className="col-12">
											<textarea
												name="message"
												required
												rows={4}
												className="form-control bg-3 border border-1 rounded-3"
												placeholder="Your message"
											/>
										</div>

										<div className="col-12">
											<button type="submit" className="btn btn-primary-2 rounded-2" disabled={loading}>
												{loading ? "Sending..." : "Send Message"}
												<i className="ri-arrow-right-up-line ms-1" />
											</button>
										</div>

										{status && (
											<div className="col-12">
												<p className="text-success mt-2">{status}</p>
											</div>
										)}

									</div>
								</form>
							</div>

							<div className="z-0 bg-primary-dark rectangle-bg rounded-3" />
						</div>
					</div>

					{/* RIGHT: CONTACT DETAILS */}
					<div className="col-lg-5 d-flex flex-column ps-lg-8">

						<div className="d-flex align-items-center mb-3 position-relative">
							<div className="icon-flip icon-shape icon-xxl border border-1 rounded-3 bg-3">
								<i className="ri-mail-fill text-primary-2 fs-26" />
							</div>
							<div className="ps-3">
								<span className="text-400 fs-6">Email</span>
								<h6 className="mb-0">chittibabubavisetti14@gmail.com</h6>
							</div>
						</div>

						<div className="d-flex align-items-center mb-3 position-relative">
							<div className="icon-flip icon-shape icon-xxl border border-1 rounded-3 bg-3">
								<i className="ri-linkedin-fill text-primary-2 fs-26" />
							</div>
							<div className="ps-3">
								<span className="text-400 fs-6">LinkedIn</span>
								<h6 className="mb-0">linkedin.com/in/chittibabu</h6>
							</div>
						</div>

						<div className="d-flex align-items-center mb-3 position-relative">
							<div className="icon-flip icon-shape icon-xxl border border-1 rounded-3 bg-3">
								<i className="ri-github-fill text-primary-2 fs-26" />
							</div>
							<div className="ps-3">
								<span className="text-400 fs-6">GitHub</span>
								<h6 className="mb-0">github.com/Chittibabu14</h6>
							</div>
						</div>

						<div className="d-flex align-items-center mb-3 position-relative">
							<div className="icon-flip icon-shape icon-xxl border border-1 rounded-3 bg-3">
								<i className="ri-map-2-fill text-primary-2 fs-26" />
							</div>
							<div className="ps-3">
								<span className="text-400 fs-6">Location</span>
								<h6 className="mb-0">Andhra Pradesh, India</h6>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}
