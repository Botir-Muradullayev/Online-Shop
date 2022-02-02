<template>
    <div>
        <Header/>
        <Catalogue/>
        <Footer/>
    </div>
</template>

<script>
import Catalogue from "@/components/Catalogue";
import Footer from "@/components/Footer";
export default {
    name: "Home",
    components: {Footer, Catalogue}
}
</script>

<style scoped>

</style>