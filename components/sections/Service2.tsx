import Link from 'next/link'

export default function Service2() {
	return (
		<section id="services" className="section-service-2 pt-5">
			<div className="container">
				<div className="rounded-3 border border-1 position-relative overflow-hidden">
					<div className="box-linear-animation position-relative z-1 p-lg-5 p-1 p-md-4">
						<div className="position-relative z-1">

							{/* Heading */}
							<div className="text-center">
								<div className="d-flex align-items-center justify-content-center">
									<svg className="text-primary-2 me-2" width={5} height={6}>
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4">What I Do</span>
								</div>
								<h3>
									Building security skills through      
									<span className="text-300">
									    	hands-on practice & learning
									</span>
								</h3>
							</div>

							<div className="container mt-5">
								<div className="row g-4">

									{/* Service 1 */}
									<div className="col-lg-4 col-md-6">
										<div className="card-servies-2 rounded-2 h-100 hover-up">
											<h6 className="my-3 fw-medium">Web Application Security</h6>
											<p className="fs-7 text-300">
												Identifying common web vulnerabilities such as
												<span className="text-secondary-2"> SQL Injection</span>,
												<span className="text-secondary-2"> XSS</span>,
												<span className="text-secondary-2"> Broken Access Control</span>
												based on OWASP Top 10.
											</p>
										</div>
									</div>

									{/* Service 2 */}
									<div className="col-lg-4 col-md-6">
										<div className="card-servies-2 rounded-2 h-100 hover-up">
											<h6 className="my-3 fw-medium">Vulnerability Assessment</h6>
											<p className="fs-7 text-300">
												Performing basic vulnerability scans and manual testing using
												<span className="text-secondary-2"> Nmap</span> and
												<span className="text-secondary-2"> Burp Suite</span>,
												with clear documentation of findings.
											</p>
										</div>
									</div>

									{/* Service 3 */}
									<div className="col-lg-4 col-md-6">
										<div className="card-servies-2 rounded-2 h-100 hover-up">
											<h6 className="my-3 fw-medium">Security Reporting</h6>
											<p className="fs-7 text-300">
												Creating structured vulnerability assessment and penetration testing
												reports with
												<span className="text-secondary-2"> impact</span>,
												<span className="text-secondary-2"> evidence</span>, and
												<span className="text-secondary-2"> remediation</span>.
											</p>
										</div>
									</div>

									{/* Service 4 */}
									<div className="col-lg-4 col-md-6">
										<div className="card-servies-2 rounded-2 h-100 hover-up">
											<h6 className="my-3 fw-medium">CTF & Hands-on Labs</h6>
											<p className="fs-7 text-300">
												Solving Capture The Flag challenges focused on
												<span className="text-secondary-2"> web exploitation</span>,
												<span className="text-secondary-2"> log analysis</span>, and
												<span className="text-secondary-2"> forensics</span>.
											</p>
										</div>
									</div>

									{/* Service 5 */}
									<div className="col-lg-4 col-md-6">
										<div className="card-servies-2 rounded-2 h-100 hover-up">
											<h6 className="my-3 fw-medium">SOC & Log Analysis</h6>
											<p className="fs-7 text-300">
												Analyzing logs and security events using
												<span className="text-secondary-2"> Splunk</span> to understand
												alerts, incidents, and attack patterns.
											</p>
										</div>
									</div>

									{/* Service 6 */}
									<div className="col-lg-4 col-md-6">
										<div className="card-servies-2 rounded-2 h-100 hover-up">
											<h6 className="my-3 fw-medium">IAM Fundamentals</h6>
											<p className="fs-7 text-300">
												Understanding
												<span className="text-secondary-2"> Identity & Access Management</span>,
												including RBAC, user access reviews, and basic access lifecycle concepts.
											</p>
										</div>
									</div>

								</div>

								{/* Footer CTA */}
								<div className="text-center pt-60">
									<p className="text-300">
										Actively seeking <span className="text-dark">internships</span> and
										<span className="text-dark"> entry-level cybersecurity roles</span>.<br />
										<Link href="#contact" className="text-primary-2">Let’s connect</Link>
									</p>
								</div>

							</div>
						</div>

						<img
							className="position-absolute top-0 start-0 z-0"
							src="assets/imgs/home-page-2/services/bg.png"
							alt="zelio"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
