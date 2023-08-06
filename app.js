  fetch('./data.json')
  .then((res)=>{
    console.log(res);
    return res.json()
  })
  .then(data =>{
    console.log(data);
    let container = document.getElementById('statsContainer');
    let frag = document.createElement('div');
    data.forEach(element => {
        console.log(element);
        let stat = document.createElement('div');
        stat.classList.add('stat')
        stat.innerHTML = `
       
        <div>
          <img src="${element.icon}" alt="">
          <span>${element.category}</span>
        </div>
        <div>
          <span class="score">${element.score}</span><span> / 100</span>
          
        </div>
      
        `;
        frag.append(stat);

    });
    container.append(frag);
  }
);

