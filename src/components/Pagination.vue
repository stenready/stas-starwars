<template>
  <div class="card">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li
          class="page-item"
          :class="page === 1 ? 'disabled' : ''"
          @click="paginateHandler('prev')"
        >
          <a class="page-link" href="#">
            <i style="margin-right: 7px;" class="material-icons">arrow_back</i> Previous
          </a>
        </li>
        <li style="display: flex; align-items: center; font-size: 0.8rem;"> <span>{{ page || 1 }} of {{ data[0].pages }}</span> </li>
        <li
          class="page-item"
          :class="data.length < 10 ? 'disabled': ''"
          @click="paginateHandler('next')"
        >
          <a class="page-link" href="#">
            Next
            <i style="margin-left: 7px;" class="material-icons">arrow_forward</i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["page", "data"],
  methods: {
    async paginateHandler(event) {
      if (event === "prev") {
        this.page === 1
          ? false
          : this.$router.push(`${this.$route.path}?page=${+this.page - 1}`);
      }
      if (event === "next") {
        this.data.length < 10
          ? false
          : this.$router.push(`${this.$route.path}?page=${+this.page + 1}`);
      }
    }
  }
};
</script>

<style lang="scss">
  .pagination {
    margin-bottom: 0;
    background: rgba (blueviolet, .5) !important;
    li {
      margin: 0.5rem;
    }
    .page-link {
      display: flex;
    }
  }
</style>