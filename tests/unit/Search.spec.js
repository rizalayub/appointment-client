import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Search from '../../src/components/Appointment/Search.vue'
import axios from 'axios'

// Mock the axios library
jest.mock('axios')

// Spy the console log
global.console.log = jest.fn();

//const localVue = createLocalVue()
// install plugins as normal
//localVue.use(BootstrapVue)

describe('Search component', () => {
    var wrapper = null
    beforeEach(() => {
        wrapper = shallowMount(Search)
    })
    afterEach(()=>{
        wrapper.destroy()
    })

    it('checking all elements in place when component is created', () => {
       
        //check there is input for date
       
       
        expect(wrapper.findAll('button').length).toEqual(1)
       
 
        expect(wrapper.find('#title').text()).toMatch('*Please select the date to search the appointment')
     
 
    })
    it('search button click',   async ()  => {

        await wrapper.vm.handleSearch('2021-02-13')
    
        //expect(axios.get).toHaveBeenCalledTimes(1)
        //expect(axios.get).toBeCalledWith(expect.stringMatching(/2021-02-13/))
        expect(wrapper.emitted('handle-search')).toBeTruthy()
        expect(wrapper.emitted('handle-search').length).toBe(1)
        
    
     
      })

})