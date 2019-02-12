<template>
  <div class="header-wrapper">
    <div class="header">
      <nav class="header-left">
        <ul class="menu">
          <li class="menu-item">
            <div>News</div>
          </li>
          <li class="menu-item">
            <div>Sport</div>
          </li>
          <li class="menu-item">
            <div>Entertainment</div>
          </li>
        </ul>
      </nav>
      <div class="header-right">
        <h1>Social Edge </h1><h1>Media</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-wrapper {
  /* position: fixed;
  left: 0;
  top: 0; */
  width: 100%;
  height: 62px;
}
.header {
  align-items: center;
  border-bottom: 2px solid #eee;
  display: flex;
  justify-content: space-between;
  padding: 10px 294px 10px 40px;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
}
.menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: flex-start;
}
.menu-item {
  border-right: 2px solid #eee;
  padding: 0 10px;
  font-size: 15px;
}
.menu .menu-item div {
  margin: 0 10px;
  padding: 6px 8px;
  font-size: 14px;
  text-transform: uppercase;
  color: #777;
  cursor: pointer;
}
h1 {
  color: #777;
  font-size: 18px;
  white-space: nowrap;
  font-family: Vegan,sans-serif;
  margin: 0;
}
.header-right h1:last-child {
  font-family: Black_,sans-serif;
  margin: 0;
}
@media screen and (max-width: 600px){
.header {
    justify-content: flex-end;
    padding: 10px 40px;
}
.header-left {
    display: none;
  }
}
</style>