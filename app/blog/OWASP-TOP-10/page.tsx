import Layout from "@/components/layout/Layout"
import Image from "next/image"
export default function OwaspBlog() {
	return (
		<Layout>
			<section id="about" className="section-hero-2 position-relative pt-130 pb-3">
				<div className="container hero-2">
					<div className="border border-1 rounded-3">
						<div className="box-linear-animation position-relative z-1">
							<div className="row align-items-end py-60">
								<div className="col-lg-5 ps-lg-5 text-lg-start text-center">
									<div className="position-relative mb-lg-0 mb-5">
										<h1>Understanding OWASP Top 10 (2025)</h1>
										<p className="text-300">April 2025 • 4 min read</p>

										<p>
											The OWASP Top 10 represents the most critical web application
											security risks. This article explains each category in simple
											terms with real-world examples.
										</p>

										<h3>A01 – Broken Access Control</h3>
										<p>
											Occurs when users can access data or functionality they
											should not be allowed to.
										</p>

										<h3>Why OWASP Top 10 matters</h3>
										<p>
											It helps developers and security professionals prioritize
											security risks during testing and development.
										</p>
									</div>
								</div>
								<div className="col-lg-6 mx-lg-auto col-md-12">		
									<div className="p-lg-0 p-md-8 p-3">
										<img src="/assets/imgs/home-page-2/blog/owasp.png" alt="OWASP Top 10" />
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
