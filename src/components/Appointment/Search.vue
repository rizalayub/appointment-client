<template>
<div class="row">
    <div class="col-1">
    <button type="button" class="btn btn-primary" v-on:click="handleSearch">
        <i class="fas fa-search"></i>
    </button>
    </div>
     <div class="col-8" id="title">
           *Please select the date to search the appointment
       </div>
       </div>
</template>

<script>
export default {
    name: `Search`,
    methods:{
       handleSearch(){
         this.$emit('handle-search')
      }

    }
}
</script>