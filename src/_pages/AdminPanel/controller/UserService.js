import Vue from '../../../prototype'

const UserService = new Vue({
    data: {
        vm: this
    },
    methods: {
        async get() {
            return await this.$get(this.$getWsUrl('USER', 'ALL')).then(res => {
                sessionStorage.setItem('users', JSON.stringify(res.data.users))
                return res.data;
            }).catch(err => {
                return err.data.msg
            }).finally(() => {
            })
        },
        async remove(id){
            return await this.$delete(this.$getWsUrl('USER', 'DELETE') + id)
            .then(res => {
                if(res && res.data.res){
                    return {
                        success: true,
                        msg: res.data.msg,
                        id: res.data.id
                    } 
                }
            })
        }
    }
})

export default UserService;