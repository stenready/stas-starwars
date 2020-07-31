<template>
  <div class="snavbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <span @click="open = false">
        <router-link exact to="/" tag="a" class="navbar-brand">
          S
          <img
            style="width: 40px;"
            src="../assets/iconfinder_chewbacca_1626612.svg"
            alt="iconfinder_boba"
          />
          <img
            style="width: 40px;"
            src="../assets/iconfinder_boba-fett_1626610.svg"
            alt="iconfinder_boba"
          /> W
        </router-link>
      </span>

      <button @click="open = !open" class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse" :class="{'collapse' : open}">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" @click="open = false">
            <router-link
              :class="$route.path === `/`? 'active' : '' "
              to="/"
              tag="a"
              class="nav-link menu_family"
            >Peoples</router-link>
          </li>
          <li class="nav-item" @click="open = false">
            <router-link
              :class="$route.path === `/starships`? 'active' : '' "
              to="/starships"
              tag="a"
              class="nav-link menu_family"
            >Starships</router-link>
          </li>
          <li class="nav-item" @click="open = false">
            <router-link
              :class="$route.path === `/planets`? 'active' : '' "
              to="/planets"
              tag="a"
              class="nav-link menu_family"
            >Planets</router-link>
          </li>
          <li class="nav-item" @click="open = false">
            <router-link
              :class="$route.path === `/films`? 'active' : '' "
              to="/films"
              tag="a"
              class="nav-link menu_family"
            >Films</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style lang="scss">
.navbar-collapse {
  display: none;
  &.collapse {
    display: block;
  }
}
.navbar-toggler {
  border: none;
  &:focus {
    border: none !important;
    outline: none;
  }
}
.active {
  color: violet !important;
}
.navbar-brand.router-link-exact-active {
  color: white !important ;
}
</style>