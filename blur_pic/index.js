const blurimage = document.getElementById('blur');
const blurclass = document.querySelector('.blur');
blurimage.addEventListener('change',()=>
{
    const blurrange = blurimage.value;
    blurclass.style.backdropFilter = `blur(${blurrange}px)`;
});

const spacing = document.getElementById('space');
const spaceclass = document.querySelector('.out-pic');
const color = document.getElementById('colorpicker');
spacing.addEventListener('change',()=>
{
    const spacerange = spacing.value;
    const colorrange = color.value;
    spaceclass.style.padding = `${spacerange}px`;

})
color.addEventListener('change',()=>
{
    const colorrange = color.value;
    spaceclass.style.backgroundColor = `${colorrange}`;
    
})