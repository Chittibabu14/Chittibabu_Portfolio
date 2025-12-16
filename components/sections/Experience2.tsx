import Link from 'next/link'

export default function Experience2() {
	return (
		<section id="experience" className="section-experience pt-5">
			<div className="container">
				<div className="rounded-3 border border-1 position-relative overflow-hidden">
					<div className="box-linear-animation position-relative z-1">
						<div className="p-lg-8 p-md-6 p-3 position-relative z-1">

							{/* Section title */}
							<div className="d-flex align-items-center">
								<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
									<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
								</svg>
								<span className="text-linear-4 d-flex align-items-center">
									Experience
								</span>
							</div>

							{/* Headline */}
							<h3>
								Hands-on
								<span className="text-300"> experience in </span>
								Cybersecurity
								<span className="text-300">
									<br /> & Security Labs
								</span>
							</h3>

							<div className="row mt-5">

								{/* Left side – Experience list */}
								<div className="col-lg-4">
									<div className="d-flex flex-column gap-2">

									<Link href="" className="technology border border-1 rounded-3 p-3">
										<div className="d-flex align-items-center gap-2">
											<div className="d-flex flex-column ms-2">
												<h5 className="mb-1">Penetration Testing & VA</h5>
												<span className="text-300">Hands-on • OWASP Top 10</span>
											</div>
										</div>
									</Link>

									<Link href="" className="technology border border-1 rounded-3 p-3">
										<div className="d-flex align-items-center gap-2">
											<div className="d-flex flex-column ms-2">
												<h5 className="mb-1">CTF Challenges</h5>
												<span className="text-300">Web • Forensics • Logic</span>
											</div>
										</div>
									</Link>

									<Link href="" className="technology border border-1 rounded-3 p-3">
										<div className="d-flex align-items-center gap-2">
											<div className="d-flex flex-column ms-2">
												<h5 className="mb-1">IAM Fundamentals</h5>
												<span className="text-300">Access Review • RBAC</span>
											</div>
										</div>
									</Link>

									<Link href="" className="technology border border-1 rounded-3 p-3">
										<div className="d-flex align-items-center gap-2">
											<div className="d-flex flex-column ms-2">
												<h5 className="mb-1">Security Tools</h5>
												<span className="text-300">Nmap • Burp • Splunk</span>
											</div>
										</div>
									</Link>
									</div>
								</div>


								{/* Right side – Details */}
								<div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
									<h6 className="text-linear-4">
										Cybersecurity Student / Security Trainee
									</h6>

									<ul className="mt-4">
										<li className="text-dark mb-3">
											Conducted <span className="text-secondary-2">vulnerability assessment and basic penetration testing</span> aligned with OWASP Top 10 methodologies.
										</li>

										<li className="text-dark mb-3">
											Hands-on experience with <span className="text-secondary-2">CTF challenges</span> (Web, Forensics, Logic) to improve attack detection and exploitation skills.
										</li>

										<li className="text-dark mb-3">
											Worked on <span className="text-secondary-2">IAM fundamentals</span> such as user access reviews, RBAC concepts, and access lifecycle management.
										</li>

										<li className="text-dark mb-3">
											Performed <span className="text-secondary-2">log analysis and basic investigations</span> using SIEM and forensic tools during lab and college activities.
										</li>

										<li className="text-dark mb-3">
											Used <span className="text-secondary-2">Python scripting</span> for basic automation, recon tasks, and problem-solving in security labs.
										</li>
									</ul>

									{/* Skills tags */}
									<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
										<Link href="" className="text-300 border border-1 px-3 py-1">Nmap</Link>
										<Link href="" className="text-300 border border-1 px-3 py-1">Burp Suite</Link>
										<Link href="" className="text-300 border border-1 px-3 py-1">Splunk</Link>
										<Link href="" className="text-300 border border-1 px-3 py-1">Autopsy</Link>
										<Link href="" className="text-300 border border-1 px-3 py-1">Python</Link>
										<Link href="" className="text-300 border border-1 px-3 py-1">Linux</Link>
										<Link href="" className="text-300 border border-1 px-3 py-1">IAM</Link>
									</div>
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
