<template>
    <div>
        <p>SaascustomerTuan</p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{

        }
    },
    mounted: function () {
        console.log('调用了mounted钩子函数')
        axios.get('/api/data11')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
</script>

