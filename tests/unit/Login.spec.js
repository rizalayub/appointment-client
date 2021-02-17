import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Login from '../../src/components/Login.vue'
import axios from 'axios'

// Mock the axios library
jest.mock('axios')

// Spy the console log
global.console.log = jest.fn();

describe('login', () => {
    var wrapper = null
    const $route = {
        path: '/home'
      }
    beforeEach(() => {
      
        //const localVue = createLocalVue()
        //localVue.use(VueRouter)
        //const router = new VueRouter()
        wrapper = mount(Login, {
            //localVue,
            //router,
            mocks: {
                $route
              }
        })
    })

    afterEach(()=>{
        wrapper.destroy()
    })

    it('checking all elements in place when component is created', () => {
       
        expect(wrapper.findAll('button').length).toEqual(1)
        expect(wrapper.findAll('input').length).toEqual(2)
        expect(wrapper.find('#title > h2').text()).toMatch('DURR DENTAL TECHNICIAN APPOINTMENT')
     
 
    })
    it('login button click success redirect to home',   async ()  => {
       
          wrapper.setData({
              username: 'rizal',
              password: '1ghh'
          })
          
          expect(wrapper.findAll('button').length).toEqual(1)
          await wrapper.vm.login()
         
     
     })

     it('login button click not success error shown',   async ()  => {

                
    
     
    })

})