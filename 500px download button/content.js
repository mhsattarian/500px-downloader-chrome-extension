function addDownloadButton() {
  var imageAddress = $('.photo-show__img').prop('src');
  var buttonContainer = $(".StyledLayout__Box-WazzZ.dBFrjm").eq(0);
  var iconSample = $('.Elements__PhotoButton-epgaOd.dtqSYC').eq(-1);

  iconSample.clone().appendTo(buttonContainer).click(function () {
    window.open(imageAddress, '_blank');
  }).find('svg').replaceWith(`
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 50 50" style=" fill:#000000;">
      <g id="surface1">
          <path style=" " d="M 24.78125 2.9375 C 23.75 3.050781 22.976563 3.933594 23 4.96875 L 23 28.6875 L 19.40625 25.09375 C 18.984375 24.660156 18.386719 24.441406 17.78125 24.5 C 17.003906 24.574219 16.339844 25.097656 16.085938 25.835938 C 15.828125 26.578125 16.027344 27.398438 16.59375 27.9375 L 25 36.34375 L 33.40625 27.9375 C 33.929688 27.4375 34.144531 26.695313 33.964844 25.992188 C 33.785156 25.292969 33.242188 24.742188 32.542969 24.554688 C 31.84375 24.367188 31.097656 24.574219 30.59375 25.09375 L 27 28.6875 L 27 4.96875 C 27.007813 4.425781 26.796875 3.90625 26.414063 3.523438 C 26.03125 3.140625 25.511719 2.929688 24.96875 2.9375 C 24.90625 2.933594 24.84375 2.933594 24.78125 2.9375 Z M 2 36 L 2 41.6875 C 2 43.164063 2.449219 44.59375 3.5 45.59375 C 4.550781 46.59375 5.996094 47 7.4375 47 L 42.59375 47 C 44.054688 47 45.5 46.585938 46.53125 45.5625 C 47.5625 44.539063 48 43.058594 48 41.59375 L 48 36 L 44 36 L 44 41.59375 C 44 42.328125 43.84375 42.597656 43.71875 42.71875 C 43.59375 42.839844 43.332031 43 42.59375 43 L 7.4375 43 C 6.679688 43 6.402344 42.832031 6.28125 42.71875 C 6.160156 42.605469 6 42.414063 6 41.6875 L 6 36 Z "></path>
      </g>
    </svg>
  `);
}

var interval = setInterval(function(){  
  if ( $('.photo-show__img').length != 0 && $('.Elements__PhotoButton-epgaOd.dtqSYC').eq(-1).find('svg').length != 0) {
    clearInterval(interval);
    addDownloadButton();
  }
}, 500);