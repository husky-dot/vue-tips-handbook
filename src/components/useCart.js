import { ref } from 'vue'

const cart = ref({})


const useCart = () => {

  const addToCart = (key, value) => {
    cart.value[key] = value
  }

  return {
    cart,
    addToCart,
  }
}

export default useCart
