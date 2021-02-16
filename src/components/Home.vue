<template>

  <layout-default>
    <div class="Home">
       <appointment-list/>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault.vue';
import AppointmentList from './Appointment/AppointmentList.vue';

export default {
  name: `Home`,
  data(){
    return{
      title: 'wow'
    }
  },
  components: {
    LayoutDefault,
    AppointmentList
    }
};
</script>
