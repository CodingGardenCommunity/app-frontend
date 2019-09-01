<template>
  <div id="footer">
    <span>
      &copy; {{ year }} | Built with 💗 by
      <router-link to="/contributors">The Coding Garden Community</router-link>
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
  border-top: 2px solid #0000000a;
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
