const skills = [
  { name: 'GIT', imageUrl: './images/gitSkill.png" ' },
  { name: 'GITHUB', imageUrl: './images/githubSkill.png" ' },
  { name: 'HTML5', imageUrl: './images/html5Skill.png" ' },
  { name: 'CSS3', imageUrl: './images/css3Skill.png" ' },
  { name: 'JAVASCRIPT', imageUrl: './images/jsSkill.png" ' },
  { name: 'REACT', imageUrl: './images/reactSkill.png" ' },
  { name: 'REDUX', imageUrl: './images/reduxSkill.png" ' },
  { name: 'JEST', imageUrl: './images/jestSkill.png ' },
  { name: 'WEBPACK', imageUrl: './images/webpackSkill.png" ' },
  { name: 'SASS', imageUrl: './images/sassSkill.png" ' },
  { name: 'BOOTSTRAP', imageUrl: './images/bootstrapSkill.png" ' },
  { name: 'PHOTOSHOP', imageUrl: './images/photoshopSkill.png" ' },
];

const skillsContainer = document.querySelector('.skills');

skills.forEach((item) => {
  let divSkill = document.createElement('div');
  divSkill.classList.add('skill-details');
  divSkill.innerHTML = ` 
  <div class="skill-name">
    <h4>${item.name}</h4>
  </div>
  <div class="imageSkill">
    <img src="${item.imageUrl}" alt="" />
  </div>`;

  skillsContainer.appendChild(divSkill);
});
