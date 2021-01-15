<template>
  <div class="container">
    <div 
      v-for="solution in $frontmatter.solutions"
      data-scroll
    >
      <Heading
        :firstPartHeadlines="solution.headlineFirstPart"
        :highlighted="solution.highlighted"
        :secondPartHeadline="solution.headlineSecondPart"
        tag="h2"
      />
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.heading
 & > :first-child,
 & > :nth-child(2)
  display block
</style>