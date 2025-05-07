import React from 'react'


const skills = [
  { name: 'Photoshop', level: 75, color: 'primary' },
  { name: 'HTML5', level: 85, color: 'warning' },
  { name: 'WordPress', level: 70, color: 'info' },
  { name: 'jQuery', level: 60, color: 'danger' },
  { name: 'CSS3', level: 90, color: 'purple' }, 
  { name: 'SEO', level: 80, color: 'dark' },
];

export default function Skills() {
  return (
    <div>
      
    <div className="container py-5">
      <p className="text-uppercase text-muted small">My Specialty</p>
      <h2 className="fw-bold">My Skills</h2>
      <p className="text-muted mb-5">
       
I have a solid understanding of front-end development and I’m always working to improve my skills.
 Here are the main technologies I work with and my level of proficiency:
      </p>

      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="d-flex justify-content-between">
              <span>{skill.name}</span>
              <span className="fw-bold">{skill.level}%</span>
            </div>
            <div className="progress" style={{ height: '8px' }}>
              <div
                className={`progress-bar bg-${skill.color}`}
                role="progressbar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  )
}
