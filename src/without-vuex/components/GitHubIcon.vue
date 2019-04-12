<template>
  <div class="github">
    <a href="https://github.com/james-work-account"><i class="fab fa-github fa-2x"></i></a>
  </div>
</template>

<style>
  div.github {
    text-align: left
  }
  div.github a:visited, div.github a {
    color: #000;
  }
  div.github a:focus {
    color: red;
  }
  div.github {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0 0 5px 5px;
    width: 100%;
  }

  @media(max-width: 854px) {
    div.github {
      background-color: #fff;
      border-top: 2px solid #000;
      padding-top: 5px
    }
  }
</style>
