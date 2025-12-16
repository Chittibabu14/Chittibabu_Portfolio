import Layout from "@/components/layout/Layout"
import Image from "next/image"
export default function CtfBlog() {
	return (
		<Layout>
			<section id="about" className="section-hero-2 position-relative pt-130 pb-3">
				<div className="container hero-2">
					<div className="border border-1 rounded-3">
						<div className="box-linear-animation position-relative z-1">
							<div className="row align-items-end py-60">
								<div className="col-lg-5 ps-lg-5 text-lg-start text-center">
									<div className="position-relative mb-lg-0 mb-5">
										<h1>How I Approach CTF Challenges</h1>

											<p className="text-300">March 2025 • 5 min read</p>
	
											<p>
												This post explains my structured approach to solving
												web and forensics-based Capture The Flag challenges.
											</p>

											<ul>
												<li>Understanding the challenge</li>
												<li>Reconnaissance</li>
												<li>Exploitation</li>
												<li>Validation</li>
											</ul>
										<h3>Step 1: Understanding the challenge</h3>
										<p>
											Read the challenge description carefully to identify key
											hints and objectives.
										</p>
										<h3>Step 2: Reconnaissance</h3>
										<p>
											Gather information about the target using tools like
											nmap, dirb, and Wireshark.
										</p>
									</div>
								</div>
								<div className="col-lg-6 mx-lg-auto col-md-12">		
									<div className="p-lg-0 p-md-8 p-3">
										<img src="/assets/imgs/home-page-2/blog/CTF Learn.png" alt="CTF Writeups" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>	
			</section>
		</Layout>
	)
}
