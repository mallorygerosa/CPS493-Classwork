<template>
  <div id="nav">
<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="../assets/logo.png" height="28">
      <h3>Be happy</h3>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navBarExample" :class="{'is-active' : isActive}" @click="isActive">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item" href="about">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <a class="navbar-item" href="./views/Feed">
            Feed
          </a>          
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
          <login-badge />
      </div>
    </div>
  </div>
</nav>
  <router-view/>
  </div>
</template>

<style lang="scss">
</style>

<script>
import LoginBadge from "./loginBadge";

export default {
  data() {
    return {
      isActive: false,
    };
  },
  components: {
    LoginBadge,
  },
};
</script>