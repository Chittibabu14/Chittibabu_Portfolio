export default function Education2() {
	return (
		<section id="resume" className="section-education">
			<div className="container">
				<div className="row">

					{/* EDUCATION */}
					<div className="col-lg-6 pt-3">
						<div className="rounded-3 border border-1 position-relative h-100 overflow-hidden">
							<div className="box-linear-animation p-md-6 p-3">
								<div className="d-flex align-items-center">
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={28} viewBox="0 0 24 28" fill="none">
										<path className="fill-primary-2" d="M0 22.667V4.66699C0 2.45786 1.79087 0.666992 4 0.666992H22.6667C23.4031 0.666992 24 1.26395 24 2.00033V26.0003C24 26.7367 23.4031 27.3337 22.6667 27.3337H4.66667C2.08933 27.3337 0 25.2443 0 22.667Z" fill="#62A92B" />
									</svg>
									<h2 className="mb-0 ms-2">Education</h2>
								</div>

								<div className="d-flex flex-column h-100 position-relative mt-5">
									<ul className="ps-3">

										<li className="position-relative z-1 mb-3">
											<div className="d-flex gap-2">
												<p className="text-300 text-nowrap mb-0">2022 – 2026:</p>
												<div>
													<span className="text-primary-2">
														Bachelor of Technology (B.Tech) – Cybersecurity
													</span>
													<p className="text-dark mb-1">
														Final-year undergraduate specializing in Cybersecurity at "Kakinada Institute of Engineering and Technology".
													</p>
												</div>
											</div>
										</li>

										<li className="position-relative z-1 mb-3">
											<div className="d-flex gap-2">
												<p className="text-300 text-nowrap mb-0">2020 – 2022:</p>
												<div>
													<span className="text-primary-2">
														Higher Secondary Education (Intermediate)
													</span>
													<p className="text-dark mb-0">
														Completed intermediate education with focus on analytical thinking, mathematics, and problem-solving fundamentals.
													</p>
												</div>
											</div>
										</li>
									</ul>
									<div className="line-left position-absolute top-0 border-start z-0" />
								</div>

								<div className="bg-overlay position-absolute bottom-0 start-0 z-1" />
							</div>
						</div>
					</div>

					{/* LEARNING / PRACTICE */}
					<div className="col-lg-6 pt-3">
						<div className="bg-3 rounded-3 border border-1 p-md-6 p-3 position-relative h-100 overflow-hidden">
							<div className="d-flex align-items-center">
								<svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
									<path className="fill-primary-2" d="M4 14.6667H28V17.3333H4V14.6667Z" fill="#A8FF53" />
								</svg>
								<h2 className="mb-0 ms-2">Learning & Practice</h2>
							</div>

							<div className="d-flex flex-column h-100 position-relative mt-5">
								<ul className="ps-3">
									<li className="position-relative z-1 mb-2">
										<span className="text-primary-2">Penetration Testing & VA</span>
										<p className="text-dark mb-0">
											OWASP Top 10 testing, Nmap scanning, Burp Suite analysis, and security reporting.
										</p>
									</li>
									<li className="position-relative z-1 mb-2">
										<span className="text-primary-2">CTFs & Security Labs</span>
										<p className="text-dark mb-0">
											Web exploitation, forensics challenges, and attack methodology practice.
										</p>
									</li>
									<li className="position-relative z-1 mb-2">
										<span className="text-primary-2">SIEM & Automation</span>
										<p className="text-dark mb-0">
											Log analysis using Splunk and Python-based security automation.
										</p>
									</li>
									<li className="position-relative z-1 mb-2">
										<span className="text-primary-2">Networking, Linux & IAM</span>
										<p className="text-dark mb-0">
											Networking fundamentals, Linux systems, RBAC, and access management basics.
										</p>
									</li>
								</ul>

								<div className="line-left position-absolute top-0 border-start z-0" />
							</div>

							<div className="bg-overlay position-absolute bottom-0 start-0 z-1" />
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}
