'use client'
import CountUp from 'react-countup'

export default function Static2() {
	return (
		<div className="section-static-1 z-0">
			<div className="container position-relative z-1">
				<div className="bg-3 py-60 border border-1 rounded-3 position-relative overflow-hidden">
					<div className="inner">
						<div className="row align-items-center justify-content-lg-around justify-content-center">

							{/* YEARS OF LEARNING */}
							<div className="col-lg-auto col-md-6 text-center text-lg-start">
								<div className="counter-item-cover counter-item">
									<div className="content mx-auto">
										<i className="ri-book-line text-primary-2" />
										<h2 className="text-300 my-0 fs-50">
											<CountUp enableScrollSpy end={3} />
											<span className="fs-50 text-300">+</span>
										</h2>
										<p className="fs-6 mb-0 text-dark">Years of Cybersecurity Learning</p>
									</div>
								</div>
							</div>

							{/* CTFs / LABS */}
							<div className="col-lg-auto col-md-6 text-center text-lg-start">
								<div className="counter-item-cover counter-item">
									<div className="content mx-auto">
										<i className="ri-terminal-box-line text-primary-2" />
										<h2 className="text-300 my-0 fs-50">
											<CountUp enableScrollSpy end={40} />
											<span className="fs-50 text-300">+</span>
										</h2>
										<p className="fs-6 mb-0 text-dark">CTFs & Security Labs Solved</p>
									</div>
								</div>
							</div>

							{/* SECURITY REPORTS */}
							<div className="col-lg-auto col-md-6 text-center text-lg-start">
								<div className="counter-item-cover counter-item">
									<div className="content mx-auto">
										<i className="ri-file-search-line text-primary-2" />
										<h2 className="text-300 my-0 fs-50">
											<CountUp enableScrollSpy end={15} />
											<span className="fs-50 text-300">+</span>
										</h2>
										<p className="fs-6 mb-0 text-dark">Security Reports Written</p>
									</div>
								</div>
							</div>

							{/* TOOLS USED */}
							<div className="col-lg-auto col-md-6 text-center text-lg-start">
								<div className="counter-item-cover counter-item">
									<div className="content mx-auto">
										<i className="ri-tools-line text-primary-2" />
										<h2 className="text-300 my-0 fs-50">
											<CountUp enableScrollSpy end={10} />
											<span className="fs-50 text-300">+</span>
										</h2>
										<p className="fs-6 mb-0 text-dark">Security Tools Used</p>
									</div>
								</div>
							</div>

						</div>
					</div>

					<div
						className="background position-absolute top-0 start-0 w-100 h-100 filter-invert"
						data-background="assets/imgs/home-page-2/static/bg.png"
					/>
				</div>
			</div>
		</div>
	)
}
