import Button from './shared/Button';

function JobItem({ job }) {
	return (
		<li>
			<div className="info-left">
				<div>
					<img src={job.logo} alt="Logo" />
				</div>
				<div className="text">
					<div className="company">
						<h3>
							{job.company} {job.new} {job.featured}
						</h3>
						{job.new && <Button>NEW</Button>}
						{job.featured && <Button>FEATURED!</Button>}
					</div>
					<p className="position">{job.position}</p>
					<ul className="details">
						<li>{job.postedAt}</li>
						<li>{job.contract}</li>
						<li>{job.location}</li>
					</ul>
				</div>
			</div>
			<ul className="language">
				<li>
					<Button>{job.role}</Button>
				</li>
				<li>
					<Button>{job.level}</Button>
				</li>
				{job.languages.map((language) => (
					<li key={language}>
						<Button>{language}</Button>
					</li>
				))}
				{job.tools.map((tool) => (
					<li key={tool}>
						<Button>{tool}</Button>
					</li>
				))}
			</ul>
		</li>
	);
}

export default JobItem;
