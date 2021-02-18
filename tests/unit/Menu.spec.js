import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import { BootstrapVue  } from 'bootstrap-vue'
import axios from 'axios'
import Menu from '../../src/components/Menu'

// Mock the axios library
//jest.mock('axios')
jest.mock('axios', () => ({
  post: jest.fn(() => {
      return {
          status: 1,
          name: 'rizal'
      }
  })
})
)

// Spy the console log
//global.console.log = jest.fn();


describe('Implementation Test for App.vue with Successful HTTP GET', () => {
  let wrapper = null

  beforeEach(() => {
    var localVue = createLocalVue()
    localVue.use(BootstrapVue)
    axios.post.mockClear();
    
    // Set the mock call to GET to return a successful GET response
    
    // render the component
    wrapper = mount(Menu, {
      localVue
    })

  });
  
  afterEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
    wrapper.destroy()
  })


  it('check technician name at the', async () => {
    
    // expect(axios.post).toBeCalledWith(expect.stringMatching(/login/))
    // await wrapper.vm.$nextTick()
    // // check that the user data is properly set
    // expect(typeof wrapper.vm.items).toEqual("object");
    // expect(wrapper.findAll('.techName').length).toEqual(1)
    // expect(wrapper.findAll('.techName').at(0).text()).toMatch("Herzlich willkommen rizal")

   })

})
