import Button from './shared/Button';

function JobItem({ job }) {
	return (
		<li className={job.new ? 'new' : ''}>
			<div className="info-left">
				<div>
					<img src={job.logo} alt="Logo" />
				</div>
				<div className="text">
					<div className="company">
						<h3>
							{job.company} {job.new} {job.featured}
						</h3>
						{job.new && (
							<Button value={true} type={'new'}>
								NEW
							</Button>
						)}
						{job.featured && (
							<Button value={true} type={'featured'}>
								FEATURED!
							</Button>
						)}
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
					<Button value={job.role} type="role">
						{job.role}
					</Button>
				</li>
				<li>
					<Button value={job.level} type="level">
						{job.level}
					</Button>
				</li>
				{job.languages.map((language) => (
					<li key={language}>
						<Button value={language} type="languages">
							{language}
						</Button>
					</li>
				))}
				{job.tools.map((tool) => (
					<li key={tool}>
						<Button value={tool} type="tools">
							{tool}
						</Button>
					</li>
				))}
			</ul>
		</li>
	);
}

export default JobItem;
