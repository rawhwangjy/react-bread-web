import { Link } from 'react-router-dom';

const ProjectListAll = ({ mappingPojectList }) => {
	return (
		<div className='project_list'>
			{mappingPojectList.map((project, index) => (
				<div
					className='project_wrap'
					key={`project${index}`}
				>
					<Link
						to={`${project.id}`}
						className='project'
					>
						<div
							className={`project_title ${
								project.typePc || project.typeMobile ? 'wBadge' : ''
							}`}
						>
							<h4>{project.title}</h4>
							<span className='types_badge'>
								{project.typePc && <span className='pc'>PC</span>}
								{project.typeMobile && <span className='mobile'>모바일</span>}
							</span>
						</div>
						<div className='date_area'>
							<span className='date'>
								<span aria-label='시작년도'>{project.startYear}.</span>
								<span aria-label='시작월'>
									{project.startMonth < 10
										? `0${project.startMonth}`
										: project.startMonth}
								</span>
							</span>{' '}
							~
							<span className='date'>
								<span aria-label='종료년도'>{project.endYear}.</span>
								<span aria-label='종료월'>
									{project.endMonth < 10
										? `0${project.endMonth}`
										: project.endMonth}
								</span>
							</span>
						</div>
						<span className='introduce'>{project.introduce}</span>
						<div className='companies'>
							<span>
								소속 : <strong>{project.company}</strong>
							</span>
							<span>
								발주사 : <strong>{project.orderCompany}</strong>
							</span>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
};

export default ProjectListAll;
