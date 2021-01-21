<template>
  <div :class="$frontmatter.title.toLowerCase()">
    <transition 
      :duration="{ enter: 500, leave: 800 }"
      name="slide-fade"
    >
      <Content/>
    </transition>
  </div>
</template>