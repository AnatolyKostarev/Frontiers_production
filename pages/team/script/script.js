let $team = document.querySelector('#team');
let $teamNew = `<div class="team-men-info">
<img src="./imageTeam/blockTeamMaria.png" alt="" />
<div class="team-men-info-text">
  <h3>Мария Кузнецова</h3>
  <h4>Основатель, идейный вдохновитель</h4>
  <ul>
    <li>эксперт по масштабированию бизнеса, привлечению инвестиций и ресурсов в компанию, франчайзингу, и
      бизнесдевеломенту</li>
    <li>соавтор книги: «Старт в бизнесе: купить готовый бизнес или открыть по франшизе»</li>
    <li>член Объединенной рабочей группы по франчайзингу по защите прав предпринимателей Москвы</li>
    <li>автор программы "Практика бизнеса" для студентов и приглашенный преподаватель Высшей школы экономики</li>
    <li>аккредитованный эксперт и спикер по франчайзингу АСИ (Агентство стратегических инициатив)</li>
  </ul>
  <div class="team-men-info-text-items">
    <div>
    <div>
      <h5>70+ млн. ₽</h5>
      <h6>инвестиций привлечено</h6>
    </div>
    <div>
      <h5>35+ млн. ₽</h5>
      <h6>инвестиций привлечено в отельный бизнес</h6>
    </div>
    <div>
      <h5>80+</h5>
      <h6>совершено сделок по продаже бизнеса</h6>
    </div>
  </div>
  <div>
    <div>
      <h5>300+</h5>
      <h6>франшиз упаковано</h6>
    </div>
    <div>
      <h5>970+</h5>
      <h6>франшиз проданно</h6>
    </div>
  </div>
  </div>
  <div class="team-men-info-links">
    <a href="">
      <svg width="44" height="24" viewBox="0 0 44 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6H22V18C17.5 17 14 11.5 13 6M30 6C29 8 27 11 25 12M25 12H22M25 12C27 13 29 16 30 18" stroke="#E4C592" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
    <a href="">
      <svg width="44" height="24" viewBox="0 0 44 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26 4H18C15.7909 4 14 5.79086 14 8V16C14 18.2091 15.7909 20 18 20H26C28.2091 20 30 18.2091 30 16V8C30 5.79086 28.2091 4 26 4Z" stroke="#E4C592" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22 15C23.6569 15 25 13.6569 25 12C25 10.3431 23.6569 9 22 9C20.3431 9 19 10.3431 19 12C19 13.6569 20.3431 15 22 15Z" stroke="#E4C592" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M26.5 7.5V7.501" stroke="#E4C592" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </a>
    <a href="">
      <svg width="44" height="24" viewBox="0 0 44 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.6253 4L26.7966 4C23.8345 3.99909 22.2973 4.59505 22.2973 8.28647C22.2973 12.6849 22.2973 15.434 22.2973 20.5V11.4649M27.5946 11.4649H22.2973M22.2973 11.4649H17" stroke="#E4C592" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  </div>
</div>

</div>`;
let $teamDefault =`<div>
<a href="#team" onclick="aboutMaria()">
  <img src="./imageTeam/blockTeamMaria.png" alt="" />
  <button onclick="aboutMaria()" class="btn_maria">Подробнее</button>
</a>
</div>
<div>
<a href="">
  <img src="./imageTeam/blockTeamMaria.png" alt="" />
  <button>Подробнее</button>
</a>
</div>
<div>
<a href="">
  <img src="./imageTeam/blockTeamMaria.png" alt="" />
  <button>Подробнее</button>
</a>
</div>`;


 
function aboutMaria(){
  if(window.innerWidth > 576){
    $team.innerHTML = $teamNew;
    document.querySelector('.team-men>div>div>div').style = "background:transparent; border: none; width:100%;"
    console.log(`yra`);
  }
  if(window.innerWidth <= 576){
    $team.innerHTML = $teamNew;
    document.querySelector('.team-men>div>div>div').style = "background:transparent; border: none; width:100%;"
    document.querySelector('.team-men').style="height: 1360px;"
  }
}

function teamDefault(){
  if(window.innerWidth > 576){
$team.innerHTML = $teamDefault;
$team.classList.add('team-men-maria-animation');
// document.querySelector('.team-men').style="height: 1433px;"
setTimeout(()=>{
  $team.classList.remove('team-men-maria-animation')
},1000)
  }
  if(window.innerWidth <= 576){
    $team.innerHTML = $teamDefault;
$team.classList.add('team-men-maria-animation');
document.querySelector('.team-men').style="height: 1433px;"
setTimeout(()=>{
  $team.classList.remove('team-men-maria-animation')
},1000)
  }
}