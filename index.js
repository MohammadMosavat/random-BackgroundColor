
document.addEventListener('keyup' , e => {
    e.preventDefault();
    if(e.key === 'x' && e.ctrlKey === true){
      console.log(e)
      let color = Math.floor(Math.random() * 0xdfcad);
      document.body.style.backgroundColor = `#${color}`;
    }
})


