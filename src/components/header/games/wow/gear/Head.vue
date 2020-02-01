<template>
    <div>
        <div>
            Helm
        </div>
        <img :src="foo2" />
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            foo: [],
            foo2: ''
        }
    },
    props: {
        headId: {
            type: Number,
            required: true
        }
    },
    computed: {
        printOutputURL() {
            console.log('head.vue headId', this.headId);
            axios
                .get(process.env.VUE_APP_GEAR_DB + `${this.headId}` + process.env.VUE_APP_GEAR_DB_TOKEN)
                .then(res => {
                    this.foo = res.data.assets[0].value;
                    let bar = this.foo;
                    return bar;
                })
                .then(bar => {
                    this.foo2 = bar;
                })
                .catch(err => {
                    console.error(err);
                })
        }
    }
};
</script>

<style>

</style>