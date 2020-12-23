

//Ready actions
jQuery(document).ready(function () {
  
});

//Load actions
jQuery(window).load(function () {
  
});

//On resize actions
window.onresize = function() {
  
}


const commentContent = document.getElementById('commentContent').value;
const comments = document.getElementById('comments');

comments.insertAdjacentHTML('beforeend', `<p class="comment">${commentContent}</p>`);