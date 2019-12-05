<template>
    <div class="edit-post">
        <form class="edit-post-forum">
        <i class="fa fa-times-cirlce"></i>
        <h2 class="edit-title">Edit Comment </h2>
        <button v-on:click="editPost = false">Close</button>
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
.edit-title{
    padding: 9px;
    background-color: #8FB339;
    margin-bottom: 4px;
    border-radius: 5px;
    font-weight: bold
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

button{
    align-self: right;
}
</style>