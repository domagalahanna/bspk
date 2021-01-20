<template>
  <div :class="$frontmatter.title.toLowerCase()">
    <transition name="slide-fade">
      <Content/>
    </transition>
  </div>
</template>