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
        async update(form) {
            return await this.$patch(this.$getWsUrl("USER", "UPDATE"), form)
                .then((res) => {
                    if (res && res.data && res.data.res) {
                        return {
                            success: true,
                            msg: res.data.msg
                        }
                    } else {
                        return {
                            success: false,
                            msg: "Houve um problema ao atualizar os dados.",
                        }
                    }
                })
                .catch((err) => {
                    return {
                        success: false,
                        msg: err.data.msg
                    }
                })
        },
        async save(form) {
            return await this.$post(this.$getWsUrl("USER", "CREATE"), form)
                .then((res) => {
                    if (res && res.data && res.data.res) {
                        return {
                            success: true,
                            msg: res.data.msg,
                            id: res.data.id
                        }
                    } else {
                        if(res && res.msg)
                        return {
                            success: false,
                            msg: res.msg,
                        }
                    }
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