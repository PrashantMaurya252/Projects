let btn=document.querySelector('#new-Quote')
let quote=document.querySelector('.quote')
let person=document.querySelector('.person')

const quotes=[{
    quote:'“If you are going through hell, keep going.”' ,
    person:'Winston Churchill'
},
{
    quote:'"If you build it, they will come."' ,
    person:'Joe Jackson (character)'
},
{
    quote:'"If you want something done right, do it yourself."' ,
    person:'Charles-Guillaume Étienne'
},
{
    quote:'"All that glitters is not gold."' ,
    person:'William Shakespeare'
},
{
    quote:'"Genius is one percent inspiration and ninety-nine percent perspiration."' ,
    person:'Thomas Edison'
}]

btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote
    person.innerText=quotes[random].person

})