let pagers = document.querySelectorAll('.testimonials .pager a');
let testimonialsList = document.querySelectorAll('.testimonials_list li');
let paginationUp = document.querySelector('.pagination .up');
let paginationDown = document.querySelector('.pagination .down');
let curremtIdx = 0;
let testimonialCount = testimonialsList.length;

/*
pagers를 클릭하면 할일
    모든a에서 active를 제거하고, 클릭한 그 요소에 active 추가
*/
pagers.forEach((item,idx)=>{
  item.addEventListener('click',(e)=>{
    e.preventDefault();

   showTestimonial(idx);
  })
});

function showTestimonial(num){
/*  
  if(num===-1){
    curremtIdx=testimonialCount-1;
   }
    else if(num===3){
    num=0;
    } else{
     num = num
    }
    num = (num === -1) ? testimonialCount -1 : (num ===3) ? 0: num
    */
   num = (num + testimonialCount) % testimonialCount;
   /*
   num = (1+3) % 3 =1 
   num1 num1

   num = (2+3) % 3 =2
   num2 num2

   num = (3+3) % 3 =0
   num3 num0
   */

   for(let testimonial of testimonialsList){
    testimonial.classList.remove('active');
  }
  testimonialsList[num].classList.add('active'); 
  curremtIdx = num;
  
  for(let pager of pagers){
    pager.classList.remove('active');
  }
  pagers[num].classList.add('active');
};

/*
  첫 후기인데, -1 마지막 후기가 보이도록
  마지막 후기인데,3, 첫후기가 보이도록*/

paginationDown.addEventListener('click',()=>{
  showTestimonial(curremtIdx + 1)
});
paginationUp.addEventListener('click',()=>{
  showTestimonial(curremtIdx - 1)
});