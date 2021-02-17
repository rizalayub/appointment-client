<template>

  <layout-default>
    <div>
       <appointment-list class="app-list"/>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault.vue';
import AppointmentList from './Appointment/AppointmentList.vue';

export default {
  name: `Home`,
  components: {
    LayoutDefault,
    AppointmentList
    }
};
</script>
