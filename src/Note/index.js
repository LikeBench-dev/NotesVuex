import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        note: {
            title: '',
            descr: '',
            priority: 'light',
            id: '',
            date: ''
        },

        notes: [
            {
                title: 'First Note',
                descr: 'Description for First Note',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'light',
                id: 1
            },
            {
                title: 'Second Note',
                descr: 'Description for Second Note',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'middle',
                id: 2
            },
            {
                title: 'Third Note',
                descr: 'Description for Third Note',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'high',
                id: 3
            },
            {
                title: 'Four Note',
                descr: 'Description for Four Note',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'light',
                id: 4
            },

        ],
    },
    mutations: {
        // addNote (state, note) {
        //     Vue.set(state.note, 'title', note.title);
        //     Vue.set(state.note, 'descr', note.descr);
        //     Vue.set(state.note, 'priority', note.priority);
        //     Vue.set(state.note, 'id', note.id);
        //     Vue.set(state.note, 'date', note.date);
        //     state.notes.push(Object.assign({}, state.note));
        // }
        addNote (state, note) {
            state.notes.push(note)
        }
    },
    actions: {
        addNote (state, payload) {
            state.commit('addNote', payload)
        }
    },
    getters: {
        getNotes (state) {
            return state.notes
        },
        getNote (state) {
            return state.note
        }
    }
})

