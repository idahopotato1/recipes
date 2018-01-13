import Vue from 'vue'
import RecipeCard from '@/components/RecipeCard'

describe('RecipeCard', () => {
  let vm

  beforeEach(() => {
    const Constructor = Vue.extend(RecipeCard)
    const recipeMock = {
      title: 'testing',
      type: 'test',
      imgSrc: 'test.jpg',
      description: 'testing',
      prepTime: 1,
      cookTime: 1
    }

    vm = new Constructor({ propsData: { recipe: recipeMock } }).$mount()
  })

  it('should be named "recipe-card"', () => {
    expect(RecipeCard.name).to.equal('recipe-card')
  })

  it('should load a recipe in props', () => {
    expect(vm.recipe.title).to.equal('testing')
  })

  it('should compute an imageStyle property', () => {
    expect(vm.imageStyle).to.equal('background-image: url(test.jpg);')
  })

  it('should compute a recipeTime property', () => {
    expect(vm.recipeTime).to.equal(2)
  })

  it('should have a viewRecipe method to navigate to a recipe', () => {
    expect(vm.viewRecipe).to.be.a('function')

    let routerUsed = false

    Object.defineProperty(vm, '$router', {
      get: () => {
        return {
          push: function () { routerUsed = true }
        }
      }
    })

    vm.viewRecipe(1)

    expect(routerUsed).to.equal(true)
  })
})
