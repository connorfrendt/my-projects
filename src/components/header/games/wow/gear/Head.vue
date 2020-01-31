<template>
    <div>
        <div>
            HEAD STUFF
        </div>
        <img :src="headPic" />
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: {
        headId: Number,
        headPic: ''
    },
    methods: {
        getToonGear() {
            console.log('here', this.headId);
            axios
                .get(`https://us.api.blizzard.com/data/wow/media/item/166696?namespace=static-us&locale=en_US&access_token=US478XeA0Ygq1IBP4xenEggbq3KzPsQQm4`)
                .then(res => {
                    this.headPic = res.data.assets[0].value;
                    
                    console.log('asdfasdf', res.data.assets[0].value);
                })
        }
    },
    created() {
        this.getToonGear();
    },
    computed: {
        printOutputURL() {
            let foo = `https://us.api.blizzard.com/data/wow/media/item/166696?namespace=static-us&locale=en_US&access_token=US478XeA0Ygq1IBP4xenEggbq3KzPsQQm4`;
            return foo;
        }
    }
};
</script>

<style>

</style>