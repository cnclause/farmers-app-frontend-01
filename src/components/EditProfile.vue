<template>
    <div class="create profile">
        <h1 class="title"> Create Account</h1>
        <form v-on:submit.prevent="createProfile($event)">
            <div class="profile-inputs">
                <label> Select Status </label>
                    <p>*Required*</p>
                <select name="status" required>
                    <option value="farmer">Farmer</option>
                    <option value="cultivator">Cultivator</option>
                    <option value="enthusiest">Enthusiest</option>
                </select>
            </div>
            <div class="profile-inputs">
                <label>Username</label>
                    <p>*Required*</p>
                <input type="text" name="display_name"
                :placeholder= user.display_name
                required
                >
            </div>
            <div class="profile-inputs">
                <label>First Name</label>
                <input type="text" name="first_name"
                :placeholder= user.first_name
                >
            </div>
            <div class="profile-inputs">
                <label>Last Name</label>
                <input type="text" name="last_name"
                :placeholder= user.last_name
                >
            </div>
            <input type="submit" value="Create Profile">
            <!-- <label>About Me</label>
            <input type="text" name="display_namme"
            placeholder="This will show on your profile page"
            > -->
        </form>
    </div>
</template>

<script>
export default { 
   props: {
       user: Object
   },
   methods: {
       createProfile(event){
           event.preventDefault()
           const formData = new FormData(event.target)

           const status = formData.get("status")
           const username = formData.get("display_name")
           const firstName = formData.get("first_name")
           const lastName = formData.get("last_name")

        const userInfo={
            status,
            username,
            firstName,
            lastName
        }

        this.$store.dispatch('postUser', userInfo)
       }
   }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:400&display=swap');

.title{
  text-align: center;
  font-family: 'Frank Ruhl Libre', serif;
  letter-spacing: 0.1em;
  font-size: 40pt;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
/* 
.create-profile{
    display: flex;
    justify-content: center;
} */

form{
    font-family: 'Raleway', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-inputs{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
}

label{
    font-size: 15pt;
}

input, select{
    width: 9rem;
    margin: 0.5rem;
    font-size: 12pt;
}

select{
    height: 2rem;
}

form p{
    font-size: 10pt;
    color: red;
}

</style>