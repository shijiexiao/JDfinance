<template lang="html">
    <div>

        <Heador></Heador>
        <Hslider></Hslider>
        <novice></novice>
        <borrow></borrow>
        <money></money>
        <product></product>
        <life></life>
        <Hfooter></Hfooter>
        <span >杰哥在线教你做人</span>
        <navbar></navbar>
    </div>
</template>

<script>
    import Heador from '../public/header'
    import Hslider from './hslider'
    import novice from './novice'

    import borrow from './borrow'
    import money from './money'
    import product from './product'
    import life from './life'
    import Hfooter from '../public/footer'
    import navbar from '../public/navbar.vue'

    export default {
        components: {
            Heador,life,navbar,Hfooter,Hslider,novice,borrow,product,money,
        }
    }
</script>
