let stars = window.document.getElementById('stars');
let moon = window.document.getElementById('moon');
let mountains3 = window.document.getElementById('mountains3');
let mountains4 = window.document.getElementById('mountains4');
let river= window.document.getElementById('river');
let boat = window.document.getElementById('boat');
let ahmed = window.document.querySelector('.ahmed');
window.onscroll = function(){
    let value = scrollY;
    console.log(value)
    stars.style.left = value + 'px';
    moon.style.top = value *4 + 'px';
    mountains3.style.top = value *1.2 + 'px';
    mountains4.style.top = value *1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.left = value *3 + 'px';
    ahmed.style.fontSize = value + 'px';
    if (scrollY>= 67)
    {
        ahmed.style.fontSize = 67 + 'px';
        ahmed.style.position = 'fixed';
        if (scrollY >=450)
        {
            ahmed.style.display = 'none'
        }
        else{
            ahmed.style.display = 'block'
        }
        if(scrollY>=100)
        {
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
        }
        else
        {
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';

        }
    }
}