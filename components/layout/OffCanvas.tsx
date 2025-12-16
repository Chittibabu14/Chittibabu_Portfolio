import Link from "next/link"

export default function OffCanvas({
	isOffCanvas,
	handleOffCanvas,
}: {
	isOffCanvas: boolean
	handleOffCanvas: () => void
}) {
	return (
		<>
			{/* OffCanvas Menu */}
			<div className={`offCanvas__info ${isOffCanvas ? "active" : ""}`}>

				{/* Close Button */}
				<div
					className="offCanvas__close-icon menu-close"
					onClick={handleOffCanvas}
				>
					<button aria-label="Close menu">
						<i className="ri-close-line" />
					</button>
				</div>

				{/* Title */}
				<div className="offCanvas__logo mb-5">
					<h3 className="mb-0">Get in touch</h3>
				</div>

				{/* Contact Info */}
				<div className="offCanvas__side-info mb-30">
					<div className="contact-list mb-30">
						<p className="fs-6 fw-medium text-200 mb-5">
							I’m always excited to collaborate, learn, and work on
							interesting cybersecurity and development projects.
						</p>

						<div className="mb-3">
							<span className="text-400 fs-5">Phone</span>
							<p className="mb-0">+91-7659020192</p>
						</div>

						<div className="mb-3">
							<span className="text-400 fs-5">Email</span>
							<p className="mb-0">chittibabubavisetti14@gmail.com</p>
						</div>

						<div className="mb-3">
							<span className="text-400 fs-5">Location</span>
							<p className="mb-0">Andhra Pradesh, India</p>
						</div>
					</div>

					{/* Navigation Links */}
					<div className="contact-list mb-4">
						<p className="text-400 fs-5 mb-2">Navigate</p>
						<ul className="list-unstyled d-flex flex-column gap-2">
							<li>
								<Link href="/#about" onClick={handleOffCanvas}>
									About Me
								</Link>
							</li>
							<li>
								<Link href="/#resume" onClick={handleOffCanvas}>
									Resume
								</Link>
							</li>
							
							<li>
								<Link href="/#blog" onClick={handleOffCanvas}>
									Blog
								</Link>
							</li>
							<li>
								<Link href="/#contact" onClick={handleOffCanvas}>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Social Links */}
					<div className="contact-list">
						<p className="text-400 fs-5 mb-2">Social</p>
						<div className="d-flex gap-3">

							<a
								href="https://github.com/Chittibabu14"
								target="_blank"
								rel="noopener noreferrer"
								onClick={handleOffCanvas}
								aria-label="GitHub"
							>
								<i className="ri-github-fill fs-18" />
							</a>

							<a
								href="https://www.linkedin.com/in/chittibabu-bavisetti-6a444525b/"
								target="_blank"
								rel="noopener noreferrer"
								onClick={handleOffCanvas}
								aria-label="LinkedIn"
							>
								<i className="ri-linkedin-fill fs-18" />
							</a>

							<a
								href="mailto:chittibabubavisetti14@gmail.com"
								onClick={handleOffCanvas}
								aria-label="Email"
							>
								<i className="ri-mail-fill fs-18" />
							</a>

						</div>
					</div>
				</div>
			</div>

			{/* Overlay */}
			<div
				className={`offCanvas__overly ${isOffCanvas ? "active" : ""}`}
				onClick={handleOffCanvas}
			/>
		</>
	)
}
