import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Home from '../../src/components/Home.vue'


// Mock the axios library
jest.mock('axios')

// Spy the console log
global.console.log = jest.fn();

describe('home', () => {
    var wrapper = null
    beforeEach(() => {
        wrapper = shallowMount(Home)
    })
    afterEach(()=>{
        wrapper.destroy()
    })

    it('renders sub-components when the component is created', () => {                    
        expect(wrapper.findAll('.app-list').exists()).toBeTruthy()
    })
    
})
 
