import React from 'react';

const SkillItem = ({ name, percentage }) => {
  return (
    <div className="skill-item">
      <div className="d-flex justify-content-between mb-1">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress">
        <div 
          className="progress-bar bg-primary" 
          role="progressbar" 
          style={{ width: `${percentage}%` }} 
          aria-valuenow={percentage} 
          aria-valuemin="0" 
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React.js', percentage: 85 },
    { name: 'Bootstrap', percentage: 90 },
    { name: 'Node.js', percentage: 75 }
  ];

  const softSkills = [
    { name: 'Communication', percentage: 90 },
    { name: 'Problem Solving', percentage: 95 },
    { name: 'Team Collaboration', percentage: 85 },
    { name: 'Time Management', percentage: 80 },
    { name: 'Adaptability', percentage: 90 }
  ];

  return (
    <section id="skills" className="py-5 bg-light-gray">
      <div className="container">
        <h2 className="section-heading text-center mb-5">My Skills</h2>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="mb-4">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <SkillItem 
                key={index}
                name={skill.name} 
                percentage={skill.percentage} 
              />
            ))}
          </div>
          <div className="col-lg-6">
            <h3 className="mb-4">Soft Skills</h3>
            {softSkills.map((skill, index) => (
              <SkillItem 
                key={index}
                name={skill.name} 
                percentage={skill.percentage} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;