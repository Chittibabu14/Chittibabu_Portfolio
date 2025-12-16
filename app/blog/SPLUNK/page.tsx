import Layout from "@/components/layout/Layout"
import Image from "next/image"

export default function SplunkBlog() {
	return (
		<Layout>
			<section id="about" className="section-hero-2 position-relative pt-130 pb-3">
				<div className="container hero-2">
					<div className="border border-1 rounded-3">
						<div className="box-linear-animation position-relative z-1">
							<div className="row align-items-end py-60">
								<div className="col-lg-5 ps-lg-5 text-lg-start text-center">
									<div className="position-relative mb-lg-0 mb-5">
										<h1>Intro to SOC Tools: Splunk Basics</h1>
											<p className="text-300">February 2025 • 3 min read</p>
											<p>
												Splunk is a SIEM tool used for log analysis and security
												monitoring. This article introduces core concepts and usage.
											</p>
										<h3>What is Splunk?</h3>
											<p>
												Splunk collects and indexes machine data from various sources,
												enabling real-time search, analysis, and visualization.
											</p>		
										<h3>Key Features</h3>
											<ul>
												<li>Data Ingestion: Collect logs from servers, applications, and network devices.</li>
												<li>Search Processing Language (SPL): Powerful query language for data analysis.</li>
												<li>Dashboards: Create visualizations to monitor security metrics.</li>
											</ul>
										<h3>Getting Started</h3>
												<p>
													Install Splunk, set up data inputs, and start exploring logs using SPL queries.
												</p>	
										</div>
									</div>
									<div className="col-lg-6 mx-lg-auto col-md-12">		
										<div className="p-lg-0 p-md-8 p-3">
											<img src="/assets/imgs/home-page-2/blog/Splunk.webp" alt="Splunk Basics" />
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
