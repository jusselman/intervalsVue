new Vue({
  el: '#exercise',
  data: {
    changeClasses: {
      highlight: false,
      shrink: true
    },
    float: 'float',
    userClass: '',
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '150px',
      backgroundColor: 'gray'
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    }

  },
  methods: {
    startEffect: function() {
      var vm = this
      setInterval( function() {
        vm.changeClasses.highlight = !vm.changeClasses.highlight;
        vm.changeClasses.shrink = !vm.changeClasses.shrink;
      }, 1000);
    },
    startProgress() {
      var vm = this;
      var width = 0;
      setInterval(function() {
        width = width + 10;
        vm.progressBar.width = width + 'px';
      }, 500);
    }


  }
});
