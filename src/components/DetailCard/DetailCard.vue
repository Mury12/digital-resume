<template>
    <b-card class="h-100">
        <b-card-header style="height: 35%">
            <h4>{{title}}</h4>
            <slot name="header"></slot> 
        </b-card-header>
        <slot name="body"></slot>
        <b-card-footer v-if="footer">
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
            default: 'Title Here'
        },
        footer: {
            type: Boolean,
            default: false
        }
    }
}
</script>