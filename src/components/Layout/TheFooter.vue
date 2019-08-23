<template>
  <div id="footer">
    <span>
      &copy; {{ year }} | Built with love by
      <router-link to="/contributors">CodingGarden Community</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
#footer {
  display: flex;
  min-height: 50px;
  color: black;
  background-color: white;
  box-shadow: 0 0 10px -8px black;
}
span {
  flex: 1;
  margin: auto;
  text-align: center;
  font-size: 12px;
  color: gray;
  text-decoration: none;
}

a {
  color: #0066ffc0;
  text-decoration: none;
}
</style>
