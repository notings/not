<template>
  <div class="nav">

    <div class="nav-img">
      <img src="../assets/13.jpg" alt />
    </div>

    <div class="nav-list">
      <div class="img-wrap">
        <img src="//ascdn.baidu.com/appsearch/magneton/geme_appointment.png"/>
        <span @click="list()">预约</span>
      </div>

      <div class="img-wrap">
        <img src="//ascdn.baidu.com/appsearch/magneton/game_popular.png" />
        <span @click="list()">流行</span>
      </div>

      <div class="img-wrap">
        <img class="img-s" src="//ascdn.baidu.com/appsearch/magneton/game_rank.png" />
        <span @click="list()">排行</span>
      </div>
    </div>

  </div>
</template>