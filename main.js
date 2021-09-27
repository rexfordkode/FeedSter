$(document).ready(() => {

    //Event Listener for mouse enter
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
  
  //Below add event for limiting users post characters
  $('.postText').on('keyup', ()=>{
    $('.postText').focus();
  
    let post = $(event.currentTarget).val();
    let remaining = 140 - post.length;
    if(remaining <= 0){
      $('.wordcount').addClass('red');
    }else{
       $('.wordcount').removeClass('red');
    }
    $('.characters').html(remaining); //this will change test of html
  })
  
  }); 
  