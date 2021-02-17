import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import About from '../../src/components/About.vue'
import axios from 'axios'

// Mock the axios library
jest.mock('axios')

// Spy the console log
global.console.log = jest.fn();

describe('About', () => {
    var wrapper = null
    beforeEach(() => {
        wrapper = shallowMount(About)
    })
    afterEach(()=>{
        wrapper.destroy()
    })

       
        it('renders sub-components when the component is created', () => {
                             
            // check that 4 of the 5 child components are rendered
            expect(wrapper.findAll('.layout').exists()).toBeTruthy()
            expect(wrapper.findAll('p').at(0).text()).toMatch('This application is for technician at Durr Dental to manage their appointment with the dentist around the world')
        
          })
    
    })
 
