const starElement = document.querySelector("#star-rating");
const STAR_ICON_CLASS= "star_icon";
const STAR_ICON_FILLED_CLASS = "star_icon_filled";
const SVG_ELEMENT = `<svg
xmlns="http://www.w3.org/2000/svg"
class="${STAR_ICON_CLASS}"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
stroke-width="2">
<path
stroke-linecap="round"
stroke-linejoin="round"
d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>`;
let currentValue =0;
starElement.addEventListener("click", function(e){
    const selectedElement = e.target.closest(`.${STAR_ICON_CLASS}`);
    if(!selectedElement) return;
    const value = [...starElement.children].indexOf(selectedElement)+1;
    currentValue = value;
    setValue(value);
});
starElement.addEventListener("mouseover", function(e){
    const selectedElement = e.target.closest(`.${STAR_ICON_CLASS}`);
    if(!selectedElement) return;
    const value = [...starElement.children].indexOf(selectedElement)+1;
    setValue(value);
});
starElement.addEventListener("mouseout",function(){
    setValue(currentValue);
});
function initialize(count,value){
    currentValue = value;
    const fragment = document.createDocumentFragment();
    for(let i=0;i<count;i++){
        fragment.append(SVG_ELEMENT);
        starElement.innerHTML += SVG_ELEMENT;
    }
    setValue(value);
}

function setValue(value){
    highlightStars(value);
}

function highlightStars(value){
    for(let i=0;i<starElement.children.length;i++){
        if(i<value){
            starElement.children[i].classList.add(STAR_ICON_FILLED_CLASS);
        }else {
            starElement.children[i].classList.remove(STAR_ICON_FILLED_CLASS);
        }
    }
}

initialize(5,3);