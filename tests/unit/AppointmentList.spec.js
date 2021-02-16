import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import { BootstrapVue  } from 'bootstrap-vue'
import axios from 'axios'
import AppointmentList from '../../src/components/Appointment/AppointmentList'

// Mock the axios library
//jest.mock('axios')
jest.mock('axios', () => ({
  get: jest.fn()
}));

// Spy the console log
//global.console.log = jest.fn();


describe('Implementation Test for App.vue with Successful HTTP GET', () => {
  let wrapper = null

  beforeEach(() => {
    
    var localVue = createLocalVue()
    localVue.use(BootstrapVue)
  
    axios.get.mockClear();
  
  
      
  const responseGet = { data : 
   
      [
        {
          date: "2021-02-16",
          time: '09:09:00',
          id: 1,
          technicianid:1,
          dentistid: 2,
          notes:"dfdfdf",
          equipmentid:1

        },
        {
          date: "2021-02-17",
          time: '09:09:00',
          id: 2,
          technicianid:1,
          dentistid:3,
          notes:"xxxxx",
          equipmentid:1
        }

      ]
    
    
  }

      // axios.get.mockReturnValue(Promise.resolve(responseGet));
    
  
    // Set the mock call to GET to return a successful GET response
    axios.get.mockResolvedValue(responseGet)

    // render the component
    wrapper = mount(AppointmentList, {
      localVue
    })

  });
  

  afterEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
    wrapper.destroy()
  })


  it('does load the appointment data when a successful HTTP GET occurs', async () => {
    
    await wrapper.vm.handleSearch(new Date('2021-02-16'))
     
    expect(axios.get).toHaveBeenCalledTimes(3)
    expect(axios.get).toBeCalledWith(expect.stringMatching(/2021-02-16/))


    await wrapper.vm.$nextTick()
      // check that the user data is properly set
      
      //expect(wrapper.vm.items.length).toBeGreaterThan(0);
      expect(typeof wrapper.vm.items).toEqual("object");
      expect(wrapper.vm.items.length).toEqual(1)
      expect(wrapper.findAll('tr').length).toEqual(2)
      expect(wrapper.findAll('td').at(0).text()).toMatch("1")
      expect(wrapper.findAll('td').at(1).text()).toMatch("16.2.2021")
      expect(wrapper.findAll('td').at(2).text()).toMatch("09:09:00")

   })

   it('does load the appointment data when a successful HTTP GET occurs', async () => {
    
    await wrapper.vm.handleSearch(new Date('2021-01-19'))
     
    expect(axios.get).toHaveBeenCalledTimes(3)
    expect(axios.get).toBeCalledWith(expect.stringMatching(/2021-01-19/))


    await wrapper.vm.$nextTick()

    //expect(wrapper.vm.items.length).toEqual(0)


   })


})
