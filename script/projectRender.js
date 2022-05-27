const projectContainer = document.querySelector('.project');
const projectPopContainer = document.querySelector('.pop-container');
const project = [
  {
    title: 'AIR POLLUTION TRACKING MOBILE APP',
    imageUrl: './images/airpollutionpreview.png',
    summary: `This is an Air Pollution tracking App, Which showcases the air pollution density in a particular country, where you can search for countries based on their region, and also you can view the air pollution density of a country, through the use of a circular chart.<br/>
    - This project is a capstone project for Microverse remote school.<br/>
    - I worked with two APIs, which are the Rest country API and the Air pollution API.<br/>
    - I did testing on the app using react testing library, jest, and renderer for snapshots.`,
    stack: ['REACT', 'REDUX', 'JEST', 'RENDERER'],
    id: 1,
  },
  {
    title: 'BUDGET-MK MOBILE APP',
    imageUrl: './images/budget_app.png',
    summary: `In this project, I created a budget calculator website, which has categories of 
    budgets in which you can enter transaction costs for each sub-group in other to get the 
    total budget price in that particular budget category.<br/>
    - I worked with Rails7, allowing user authentication and authorization.<br/>
    - I did testing on the app using Rspec, on feature, model and request testing, performing both unit and integration test.<br>
    - I worked on eliminating n + 1 query, using egar loading.`,
    stack: ['Ruby', 'Rails', 'Css'],
    id: 2,
  },
];

const projectDetails = [
  {
    id: 1,
    title: 'AIR POLLUTION TRACKING MOBILE APP',
    videoLink: 'https://youtu.be/C22HVb9Cna8',
    liveLink: 'https://github.com/Ginohmk/track-air-polluton-app.git',
  },
  {
    id: 2,
    title: 'BUDGET-MK MOBILE APP',
    videoLink: 'https://youtu.be/C22HVb9Cna8',
    liveLink: 'https://github.com/Ginohmk/budgeter_mk.git',
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
        <div class="button-container">
          <a href="${item.videoLink}" target="_blank">
            <button>See video explanation</button>
          </a>
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
