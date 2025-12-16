'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"



const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	// spaceBetween: 20,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
}

export default function Projects2() {
	return (
		<>

			<div className="section-projects-2 pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Projects </span>
								</div>
								<h3>My Recent Works</h3>
								<div className="position-relative">
									<Swiper {...swiperOptions} className="swiper slider-two pb-3 position-relative">
										<div className="swiper-wrapper">
											<SwiperSlide>
											<div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
												<div className="row">

													{/* Project Image */}
													<div className="col-lg-5">
														<img
															className="w-100"
															src="assets/imgs/home-page-2/projects/Hash_cracking.png"
															alt="Automated Hash Cracking Tool"
														/>
													</div>

													{/* Project Content */}
													<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
														<h4 className="text-linear-4">
															Automated Hash Cracking Tool <br />
															<span className="text-300">(Python)</span>
														</h4>

														<p>
															Built a Python-based security automation tool to perform
															dictionary-based hash cracking for learning, CTF practice,
															and understanding password security weaknesses.
														</p>

														<ul className="mt-4 list-unstyled">
															<li className="text-secondary-2 mb-3 border-bottom pb-3">
																Project Info
															</li>

															<li className="text-dark mb-3 border-bottom pb-3">
																<div className="d-flex justify-content-between">
																	<p className="mb-0">Category</p>
																	<p className="text-300 mb-0">Security Automation</p>
																</div>
															</li>

															<li className="text-dark mb-3 border-bottom pb-3">
																<div className="d-flex justify-content-between">
																	<p className="mb-0">Objective</p>
																	<p className="text-300 mb-0">
																		Hash Analysis & Password Cracking
																	</p>
																</div>
															</li>

															<li className="text-dark mb-3 border-bottom pb-3">
																<div className="d-flex justify-content-between">
																	<p className="mb-0">Features</p>
																	<p className="text-300 mb-0">
																		MD5, SHA1, SHA256, SHA512 support
																	</p>
																</div>
															</li>

															<li className="text-dark mb-3 border-bottom pb-3">
																<div className="d-flex justify-content-between">
																	<p className="mb-0">Technologies</p>
																	<p className="text-300 mb-0">
																		Python, Hashlib, Wordlists
																	</p>
																</div>
															</li>
														</ul>

														<div className="d-flex flex-wrap align-items-center gap-3 mt-6">
															<Link
																href="https://github.com/Chittibabu14/Hash_Cracker"
																target="_blank"
																className="text-300 border-bottom px-2 pb-2 link-hover"
															>
																View on GitHub
															</Link>
														</div>
													</div>

												</div>
											</div>
										</SwiperSlide>

											<SwiperSlide>
												<div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
													<div className="row">
														<div className="col-lg-5">
															<img className="w-100" src="assets/imgs/home-page-2/projects/CTF Learn.png" alt="project" />
														</div>

														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
																Vulnerability Assessment <br />
																& CTF Challenges
															</h4>

															<p>
																Performed vulnerability assessments and solved multiple CTF challenges
																focusing on web security, log analysis, and exploitation techniques.
															</p>

															<ul className="mt-4 list-unstyled">
																<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>

																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="mb-0">Scope</p>
																		<p className="text-300 mb-0">Web, Forensics, Logs</p>
																	</div>
																</li>

																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="mb-0">Techniques</p>
																		<p className="text-300 mb-0">LFI, SSRF, Regex, Analysis</p>
																	</div>
																</li>

																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="mb-0">Tools</p>
																		<p className="text-300 mb-0">Nmap, Burp, Splunk</p>
																	</div>
																</li>
															</ul>

															<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																<Link href="#" className="text-300 border-bottom px-2 pb-2 link-hover">
																	Write-up
																</Link>
																<Link href="" className="text-300 border-bottom px-2 pb-2 link-hover">
																	View on GitHub
																</Link>
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
										</div>
									</Swiper>
									<div className="position-absolute bottom-0 end-0 gap-2 pb-7 pe-5 d-none d-md-flex">
										<div className="swiper-button-prev end-0 shadow position-relative">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" fill="white" />
											</svg>
										</div>
										<div className="swiper-button-next end-0 shadow position-relative">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#A8FF53" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/projects/bg.png" alt="zelio" />
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
