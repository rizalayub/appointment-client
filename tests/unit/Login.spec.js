import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Login from '../../src/components/Login.vue'
import axios from 'axios'
import Vue from 'vue'
import VueLogin from '../../src/components/helper.js'

// Vue.use(Helper)
// //Mock the axios library
//jest.mock('')


// Spy the console log
//global.console.log = jest.fn();

describe('login', () => {
    var wrapper = null
    // const $route = {
    //     path: '/home'
    //   }
    beforeEach(() => {
       
        //const localVue = createLocalVue()
        //localVue.use(VueLogin)

        wrapper = mount(Login)
           
        })
    

    afterEach(()=>{
        wrapper.destroy()
    })

    it('render', () => {
        expect(wrapper.exists()).toBe(true)
    })

   
    

    it('user is logged in', async () => {
        wrapper.vm.$data.input.username= 'Rizal'
        wrapper.vm.$data.input.password= '1'
        await wrapper.vm.login()
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.$data.successLogin).toBe(true)
    })
    // it('checking all elements in place when component is created', () => {
       
    //     expect(wrapper.findAll('button').length).toEqual(1)
    //     expect(wrapper.findAll('input').length).toEqual(2)
    //     expect(wrapper.find('#title > h2').text()).toMatch('DURR DENTAL TECHNICIAN APPOINTMENT')
     
 
    // })
    // it('login button click success redirect to home',   async ()  => {
             
    //       expect(wrapper.findAll('button').length).toEqual(1)
    //       await wrapper.vm.login()
         
     
    //  })

    //  it('login button click not success error shown',   async ()  => {

                
    
     
    // })

})