<template lang="html">
    <div>
        <Heador></Heador>
        <Hslider></Hslider>
        <novice></novice>
        <borrow></borrow>
        <money></money>
        <product></product>
        <span>杰哥在线教你做人</span>
    </div>
</template>

<script>
    import Heador from '../public/header'
    import Hslider from './hslider'
    import novice from './novice'

    import borrow from './borrow'
    import money from './money'
    import product from './product'

    export default {
        components: {
            Heador,Hslider,novice,borrow,product,money,
        }
    }
</script>
