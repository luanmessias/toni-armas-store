// Without jQuery
// Define a convenience method and use it
var ready = ({callback}: any) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
  console.log('is ready')
});
