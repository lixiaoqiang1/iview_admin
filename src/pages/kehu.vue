<template>
    <div>
        我的客户1111
        <tables class="tables" v-if="tables"></tables>
    </div>
</template>
<script>
import tables from '@/components/com_table'
export default {
    components:{tables},
    data(){
        return{
            tables:true
        }
    }
}
</script>

