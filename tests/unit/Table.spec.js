import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import AppointmentList from '../../src/components/Appointment/AppointmentList.vue'
import { BTable } from 'bootstrap-vue'
import axios from 'axios'



//const localVue = createLocalVue()
// install plugins as normal
//localVue.use(BootstrapVue)

const items1 = [{ a: 1, b: 2, c: 3 }, { a: 4, b: 5, c: 6 }]
const fields1 = ['Id', 'Date', 'Time', 'Doctor','Action']


describe('table', () => {
  it('has expected default classes', async () => {
    const wrapper = mount(BTable, {
      propsData: {
        items: items1,
        fields: fields1
      }
    })

    expect(wrapper).toBeDefined()
    expect(wrapper.element.tagName).toBe('TABLE')
    expect(wrapper.classes()).toContain('table')
    expect(wrapper.classes()).toContain('b-table')
    expect(wrapper.classes().length).toBe(2)
    expect(wrapper.findAll('th').length).toEqual(5)
    expect(wrapper.findAll('th').at(0).text()).toBe('Id')
    expect(wrapper.findAll('th').at(1).text()).toBe('Date')
    expect(wrapper.findAll('th').at(2).text()).toBe('Time')
    expect(wrapper.findAll('th').at(3).text()).toBe('Doctor')
    expect(wrapper.findAll('th').at(4).text()).toBe('Action')

    wrapper.destroy()
  })

  it('has class "table-striped" when striped=true', async () => {
    const wrapper = mount(BTable, {
      propsData: {
        items: items1,
        fields: fields1,
        striped: true
      }
    })

    expect(wrapper).toBeDefined()
    expect(wrapper.element.tagName).toBe('TABLE')
    expect(wrapper.classes()).toContain('table-striped')
    expect(wrapper.classes()).toContain('table')
    expect(wrapper.classes()).toContain('b-table')
    expect(wrapper.classes().length).toBe(3)

    wrapper.destroy()
  })
})


