export const state = () => {
    return {
        title: '',
        user: {
            name: '未设置',
            age: '未设置'
        }
    }
}

export const mutations = {
    setTitle (state, title) {
        state.title = title
    },
    setUser (state, user) {
        state.user = user
    }
}