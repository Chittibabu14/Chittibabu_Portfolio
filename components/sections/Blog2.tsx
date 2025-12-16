import Link from 'next/link'

export default function Blog2() {
	return (
		<section id="blog" className="section-blog-2 position-relative pt-60 pb-60">
			<div className="container">

				{/* Heading */}
				<div className="text-center">
					<div className="d-flex align-items-center justify-content-center">
						<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
							<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
						</svg>
						<span className="text-linear-4 d-flex align-items-center">
							Latest Posts
						</span>
					</div>
					<h3>From My Blog</h3>
				</div>

				<div className="row mt-8">

					{/* BLOG 1 */}
					<div className="col-lg-4">
						<div className="blog-card rounded-top-2 mb-lg-3 mb-md-5 mb-3">
							<div className="blog-card__image position-relative">
								<div className="zoom-img rounded-2 overflow-hidden">
									<img className="w-100" src="assets/imgs/home-page-2/blog/owasp.png" alt="blog" />
									<Link className="position-absolute bottom-0 start-0 m-3 border border-white px-3 py-1 fs-7 bg-white rounded-2" href="#">
										Security
									</Link>
									<Link href="/blog/OWASP-TOP-10" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape rounded-circle">
										<i className="ri-arrow-right-up-line" />
									</Link>
								</div>
							</div>

							<div className="blog-card__content position-relative text-center mt-4">
								<span className="blog-card__date fs-7">
									April 2025 • 4 min read
								</span>
								<h6 className="blog-card__title mt-2">
									Understanding OWASP Top 10 (2025)
								</h6>
								<p className="blog-card__description fs-7">
									A beginner-friendly explanation of the OWASP Top 10 and why these vulnerabilities matter.
								</p>
								<Link href="/blog/OWASP-TOP-10" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
							</div>
						</div>
					</div>

					{/* BLOG 2 */}
					<div className="col-lg-4">
						<div className="blog-card rounded-top-2 mb-lg-3 mb-md-5 mb-3">
							<div className="blog-card__image position-relative">
								<div className="zoom-img rounded-2 overflow-hidden">
									<img className="w-100" src="assets/imgs/home-page-2/blog/CTF Learn.png" alt="blog" />
									<Link className="position-absolute bottom-0 start-0 m-3 border border-white px-3 py-1 fs-7 bg-white rounded-2" href="#">
										Pentesting
									</Link>
									<Link href="/blog/CTF-WRITEUPS" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape rounded-circle">
										<i className="ri-arrow-right-up-line" />
									</Link>
								</div>
							</div>

							<div className="blog-card__content position-relative text-center mt-4">
								<span className="blog-card__date fs-7">
									March 2025 • 5 min read
								</span>
								<h6 className="blog-card__title mt-2">
									How I Approach CTF Challenges
								</h6>
								<p className="blog-card__description fs-7">
									My step-by-step methodology for solving web and forensics CTF challenges.
								</p>
								<Link href="/blog/CTF-WRITEUPS" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
							</div>
						</div>
					</div>

					{/* BLOG 3 */}
					<div className="col-lg-4">
						<div className="blog-card rounded-top-2 mb-lg-3 mb-md-5 mb-3">
							<div className="blog-card__image position-relative">
								<div className="zoom-img rounded-2 overflow-hidden">
									<img className="w-100" src="assets/imgs/home-page-2/blog/Splunk.webp" alt="blog" />
									<Link className="position-absolute bottom-0 start-0 m-3 border border-white px-3 py-1 fs-7 bg-white rounded-2" href="#">
										SOC
									</Link>
									<Link href="/blog/SPLUNK" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape rounded-circle">
										<i className="ri-arrow-right-up-line" />
									</Link>
								</div>
							</div>

							<div className="blog-card__content position-relative text-center mt-4">
								<span className="blog-card__date fs-7">
									February 2025 • 3 min read
								</span>
								<h6 className="blog-card__title mt-2">
									Intro to SOC Tools: Splunk Basics
								</h6>
								<p className="blog-card__description fs-7">
									An introduction to log analysis and monitoring using Splunk for beginners.
								</p>
								<Link href="/blog/SPLUNK" className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}
