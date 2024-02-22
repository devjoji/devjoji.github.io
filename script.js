const skills = document.querySelectorAll('.profile-info li');

skills.forEach((skill) => {
  const skillName = skill.querySelector('.skill-name');
  const skillLevel = skill.querySelector('.skill-level');

  skillName.innerHTML = skillName.innerText.toUpperCase();

  const level = parseInt(skillLevel.innerText.split('%')[0]);

  const progressBar = document.createElement('div');
  progressBar.classList.add('progress-bar');
  progressBar.style.width = `${level}%`;

  skill.appendChild(progressBar);
});