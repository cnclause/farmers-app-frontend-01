<template>
    <div class="edit-post" v-if="editPost === true">
        <form class="edit-post-forum">
        <div class="icon-close-container">
            <i v-on:click="toggleEditPost" class="fa fa-window-close"></i>
        </div>
            <h2 class="edit-title">Edit Comment </h2>
            <textarea
                class="textarea-comment"
                name="response"
                rows="3"
                :placeholder="comment.response"
            />
            <input type="submit" value="Comment"/>
    </form>
  </div>
</template>

<script>
export default {
    props:{
        comment: Object,
        editPost: Boolean
    },
    methods:{
        toggleEditPost(){
            this.$emit('toggleEditPost')
        }
    }
    
}
</script>

<style>

.edit-post{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.icon-close-container{
    width: 100%;
}

.fa-window-close{
    float: right;
}

.edit-title{
    padding: 9px;
    /* background-color: #8FB339; */
    margin-bottom: 4px;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
    justify-self: center;
}
.edit-post-forum{
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