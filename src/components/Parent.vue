<template>
  <input 
    type="range"  
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="slider__input" />
</template>

<script>
export default {
  name: "Slider-1",
  props: {
    modelValue: [Number, String],
  }
};
</script>

<style lang="scss" scoped>
.slider {
  width: 75%;
  border: 5px solid #42b883;
  padding: 25px;
  margin: 0 auto;
  
  /* The slider itself */
  &__input {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 25px; /* Specified height */
    background: #d3d3d3; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;

    /* Mouse-over effects */
    &:hover {
      opacity: 1; /* Fully shown on mouse-over */
    }

    /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
    &::-webkit-slider-thumb {
      -webkit-appearance: none; /* Override default look */
      appearance: none;
      width: 25px; /* Set a specific slider handle width */
      height: 25px; /* Slider handle height */
      background: #4CAF50; /* Green background */
      cursor: pointer; /* Cursor on hover */
    }
    &--blue::-webkit-slider-thumb {
      background: blue;
    }

    &::-moz-range-thumb {
      width: 25px; /* Set a specific slider handle width */
      height: 25px; /* Slider handle height */
      background: #4CAF50; /* Green background */
      cursor: pointer; /* Cursor on hover */
    }
    &--blue::-moz-range-thumb {
      background: blue;
    }
  }
}


</style>
