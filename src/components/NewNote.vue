<template>
  
  <div class="new-note">
    <!--  message-->
    <message v-if="message" :message="message"/>
    
    <label>Title</label>
    <input type="text" v-model="note.title">
  
    <priority :note="note"/>
    
    <label>Description</label>
    <textarea v-model="note.descr"></textarea>
    
    <button class="btn btnPrimary" @click="addNote">New Note</button>
  </div>
</template>

<script>
import message from '@/components/Message.vue'
import priority from '@/components/Priority.vue'
export default {
    components: {
        priority, message
    },
    data () {
        return {
            message: null,
            note: null,
        }
    },
    created () {
        this.note = this.$store.getters.getNote
    },
    methods: {
        addNote () {

            let {title, descr, priority } = this.note
            if(title === '') {
                this.message = "Title can't me blank!";
                return false
            }
            this.$store.dispatch('addNote', {
                title,
                descr,
                priority,
                id: this.nextId(),
                date: new Date(Date.now()).toLocaleString()
            })
            
            this.note.title = ''
            this.note.descr = ''
            this.note.priority = 'light'

            this.message = null;
        },
        nextId() {
            let notes = this.$store.getters.getNotes,
              el = notes.map(v => v.id),
              max = Math.max.apply(null, el)
            return max + 1
        }
    }
}
</script>

<style lang="scss" >
.new-note {
  text-align: center;
}
.btn {
  margin: 20px 0;
}

</style>
