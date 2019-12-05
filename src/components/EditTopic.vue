<template>
<div class="edit-topic">
    <form class="edit-topic-form">
        <div class="icon-close-container-topic">
            <i v-on:click="toggleEditTopic" class="fa fa-window-close"></i>
        </div>
            <h2 class="edit-title-topic">Edit Topic</h2>
             <input
                type="text"
                name="title"
                :placeholder="topic.title"
             />
            <textarea
                class="textarea-comment"
                name="description"
                rows="3"
                :placeholder="topic.description"
            />
            <input type="submit" value="Comment"/>
    </form>
  </div>
</template>

<script>
export default {
    props:{
        user: Object,
        topic: Object
    },
    methods:{
        toggleEditTopic(){
            this.$emit('toggleEditTopic')
        }
    }
}
</script>

<style>

.edit-topic{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.02);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.icon-close-container-topic{
    width: 100%;
}

.fa-window-close{
    float: right;
}

.edit-title-topic{
    padding: 9px;
    /* background-color: #8FB339; */
    margin-bottom: 4px;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
    justify-self: center;
}
.edit-topic-form{
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 60%;
  /* background-color: #0e5521; */
  background-color: #8FB339;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid black;
}
.fa-times-cirlce{
    background-color: black;
}

</style>