import Link from "next/link"
import Marquee from "react-fast-marquee"

export default function Coporation2() {
	return (
		<section className="section-coporation">
			<div className="container pt-5">
				<div className="row">

					{/* LEFT SIDE */}
					<div className="col-lg-8">
						<div className="rounded-3 border border-1 position-relative overflow-hidden">
							<div className="box-linear-animation">
								<div className="p-lg-8 p-md-6 p-3">

									{/* Heading */}
									<div className="d-flex align-items-center">
										<svg className="text-primary-2 me-2" width={5} height={6}>
											<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
										</svg>
										<span className="text-linear-4">Community & Platforms</span>
									</div>

									<h3 className="fw-medium">
										Actively learning & contributing through
										<br />
										<span className="text-300">CTFs, Open-Source & Security Labs</span>
									</h3>

									{/* Logos / Platforms */}
									<div className="my-5 border border-1 rounded-2 p-3">
										<Marquee className="carouselTicker carouselTicker-left">
											<ul className="carouselTicker__list m-0">
												<li className="carouselTicker__item">TryHackMe</li>
												<li className="carouselTicker__item">CTF Learn</li>
												<li className="carouselTicker__item">OWASP</li>
												<li className="carouselTicker__item">GitHub</li>
												<li className="carouselTicker__item">Linux</li>
												<li className="carouselTicker__item">Burp Suite</li>
											</ul>
										</Marquee>
									</div>

									{/* Profile Links */}
									<div className="d-flex flex-column flex-md-row align-items-center gap-3">
										<div>
											<div className="circle-1 position-relative">
												<div
													className="circle-2 position-absolute top-50 start-50"
													style={{ transform: "translate(-50%, -50%)" }}
												>
													<img
														className="rounded-circle"
														src="assets/imgs/coporation/man.png"
														alt="profile"
														style={{ transform: "translate(0px, -20px)" }}
													/>

												</div>
											</div>
										</div>



										<div className="d-flex flex-column gap-2">
											<Link href="https://github.com/Chittibabu14" target="_blank">
												<i className="ri-github-fill" />
												<span className="text-300">
													<span className="text-secondary-2"> github.com/Chittibabu</span>
												</span>
											</Link>

											<Link href="https://www.linkedin.com/in/chittibabu-bavisetti-6a444525b/" target="_blank">
												<i className="ri-linkedin-fill" />
												<span className="text-300">
													 <span className="text-secondary-2"> linkedin.com/in/Chittibabu</span>
												</span>
											</Link>

											<Link href="mailto:Chittibabubavisetti14@gmail.com">
												<i className="ri-mail-fill" />
												<span className="text-300">
													 <span className="text-secondary-2"> Chittibabubavisetti14@gmail.com</span>
												</span>
											</Link>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>

					{/* RIGHT SIDE – SECURITY JOURNAL */}
					<div className="col-lg-4 pt-lg-0 pt-5">
						<div className="bg-3 rounded-3 border border-1 p-md-6 p-3 position-relative h-100">

							<div className="d-flex align-items-center">
								<svg className="text-primary-2 me-2" width={5} height={6}>
									<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
								</svg>
								<span className="text-linear-4">Security Journal</span>
							</div>
								<ul className="ps-3 mt-4">

									<li>
										<span className="text-300">Dec 2025:</span>  Practiced red team concepts through hands-on security testing labs.
									</li>

									<li>
										<span className="text-300">May 2025:</span> Practiced OWASP Top 10 vulnerabilities using web application testing.
									</li>

									<li>
										<span className="text-300">Jan 2025:</span> Solved web and forensics-based CTF challenges.
									</li>

									<li>
										<span className="text-300">Nov 2024:</span> Worked on IAM basics including access reviews and RBAC.
									</li>

									<li>
										<span className="text-300">Aug 2024:</span>  Performed log analysis using Splunk in SIEM labs.
									</li>

									<li>
										<span className="text-300">May 2024:</span> Conducted basic digital forensics using Autopsy and FTK.
									</li>

									<li>
										<span className="text-300">Feb 2024:</span> Used Python scripts for simple security automation tasks.
									</li>

								</ul>



						</div>
					</div>

				</div>
			</div>
		</section>
	)
}
