<template>
    <b-row id="page-header" class="m-0 w-100">
            <page-title :title="$route.name" />
    </b-row>
</template>

<script>
export default {
    name: 'PageHeader',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
#page-header{
    height: 85px;
    background-color: var(--def-lightgray)

}
</style>