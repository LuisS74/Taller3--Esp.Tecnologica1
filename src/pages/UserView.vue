<template>
    <div>
        <User :user="userData"/>
        <Review v-for="review in revs.reviews" :key="review._id" :review="review"></Review>
    </div>
</template>

<script>
    import { getDetailsUser } from '@/service/product.service';
    import Review from '@/components/Review.vue';
    import User from '@/components/User.vue';

    export default {

    name: 'User-View',
    components: {
    Review,
    User
},
    data(){
        return{
            revs: [],
            userData: []
        }
    },
    props: ['userid'],
    async mounted() {
        const result = await getDetailsUser( this.userid );
        this.revs = result;
        this.userData = result.user;
    }
}
</script>