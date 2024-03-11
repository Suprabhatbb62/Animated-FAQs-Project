const accordians = document.querySelectorAll(".accordian");
accordians.forEach((accordian) => {
    //'accordian.' bcz only select current. If use 'document.' means always it refers to first faq
    const icon = accordian.querySelector(".icon");  
    const answer = accordian.querySelector(".answers");

    accordian.addEventListener('click', () => {
        // icon.classList.toggle('active');
        // answers.classList.toggle('active');

        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            answer.style.maxHeight=null;
        }else{
            icon.classList.add('active');
            answer.style.maxHeight=answer.scrollHeight + 'px';
        }
    });
});
