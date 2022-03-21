const projectContainer = document.querySelector('.project');
const projectPopContainer = document.querySelector('.pop-container');
const project = [
  {
    title: 'MOBILE AND DESKTOP DASHBOARD FOR NIROBI NEWS REPORT',
    imageUrl: './images/dashboard.png',
    summary: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
    quaerat eos enim mollitia possimus. Incidunt repellendus blanditiis
    quia vitae earum! Quam ullam cupiditate porro, tempora reiciendis
    cumque optio. Doloribus laboriosam cupiditate ab neque voluptatibus
    placeat assumenda molestias asperiores quidem perferendis`,
    stack: ['HTML', 'CSS', 'SASS', 'JAVASCRIPT'],
    id: 1,
  },
];

const projectDetails = [
  {
    id: 1,
    title: 'MOBILE AND DESKTOP DASHBOARD FOR NIROBI NEWS REPORT',
    videoLink: './video/airpollution.mp4',
    liveLink: 'https://github.com/Ginohmk/track-air-polluton-app.git',
  },

  {
    id: 2,
    title: 'MOBILE Tech',
    videoLink: 'heetps://google.com',
    liveLink: 'heytt/live',
  },

  {
    id: 3,
    videoLink: 'heetps://google.com',
    liveLink: 'heytt/live',
  },
];

/*FUNCTIONS */
function loopStack(stack) {
  let li = '';
  stack.forEach((list) => {
    li += `<li> ${list} </li>`;
  });
  return li;
}

project.forEach((item) => {
  const divProject = document.createElement('div');
  divProject.classList.add('card-project');
  divProject.setAttribute('id', item.id);
  const stackSet = loopStack(item.stack);
  divProject.innerHTML = `
  <div class="image-project" id="${item.id}" >
    <img src="${item.imageUrl}" alt="DashBoard" />
  </div>
  <div class="project-details">
    <h4>${item.title}</h4>
    <p>
     ${item.summary}
    </p>

    <h4>USED STACK:</h4>
    <ul>
    ${stackSet}
    </ul>

    <button type="button" class="project-btn">See details</button>
  </div>`;
  projectContainer.appendChild(divProject);
});

const renderPopup = (id) => {
  projectDetails.forEach((item) => {
    if (item.id === Number(id)) {
      const popHtml = `<div class="pop-details-container">
        <span class="cancel-pop">&times;</span>
        <h4>${item.title}</h4>
        <div class='video'>
        <video src="${item.videoLink}" controls >
       
        </video>
        </div>
        <div class="button-container">
          <a href="${item.liveLink}" target="_blank">
            <button>See code base</button>
          </a>
        </div>`;

      projectPopContainer.innerHTML = popHtml;
      projectPopContainer.classList.remove('pop-is-hide');
    }
  });
};

const closePopup = (checkerValue) => {
  if (checkerValue === 'cancel-pop' || checkerValue === 'pop-container') {
    projectPopContainer.classList.add('pop-is-hide');
  }
};

projectContainer.addEventListener('click', (e) => {
  if (e.target.type === 'button') {
    const buttonParentId = e.target.parentNode.parentNode.id;
    renderPopup(buttonParentId);
  }
});

projectPopContainer.addEventListener('click', (e) => {
  const testChecker = e.target.classList.value;
  closePopup(testChecker);
});
