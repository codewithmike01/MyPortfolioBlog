const projectContainer = document.querySelector('.project');
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
  <div class="image-project">
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
