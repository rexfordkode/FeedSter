$(document).ready(() => {
    $('.menu').on('mouseenter', ()=>{
      $('.nav-menu').show();
    }).on('mouseleave', () =>{
      $('.nav-menu').hide();
    });
    
    $('.btn').on('mouseenter', (event) =>{
      $(event.currentTarget).addClass('.btn-hover')
    }).on('mouseleave',(event) =>{
      $(event.currentTarget).removeClass('btn-hover');
    })
    }); 
    