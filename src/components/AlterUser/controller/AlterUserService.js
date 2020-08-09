import Vue from '../../../prototype';

const AlterUserService = new Vue({
    data: {
        vm: this
    },
    methods: {
        async update(form, self = false) {
            return await this.$patch(this.$getWsUrl("USER", "UPDATE"), form)
                .then((res) => {
                    if (res && res.data && res.data.res) {
                        if (self) this.$session.set('@app:user', form)
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
                        if (res && res.msg)
                            return {
                                success: false,
                                msg: res.msg,
                            }
                    }
                })
        },
    }
});

export default AlterUserService