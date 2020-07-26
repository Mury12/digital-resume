<template>
    <b-card class="h-100 bg-white" body-class="border-none">
        <b-card-header style="max-height: 35%; border: none">
            <h6>{{title}}</h6>
            <slot name="header"></slot> 
        </b-card-header>
        <slot name="body"></slot>
        <b-card-footer class="bg-white " v-if="footer">
            <slot name="footer"></slot>
        </b-card-footer>
    </b-card>
</template>

<script>
export default {
    name: 'Detail-Card',
    props: {
        title: {
            type: String,
            default: ''
        },
        footer: {
            type: Boolean,
            default: false
        }
    }
}
</script>