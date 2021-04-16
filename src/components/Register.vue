<template>
    <div>
        <h1>Register</h1>
        <template>
  <form class="main">
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="20"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="date"
      :error-messages="dateErrors"
      :counter="10"
      label="Date of birth"
      required
      @input="$v.date.$touch()"
      @blur="$v.date.$touch()"
    ></v-text-field>
  
    <v-text-field
      v-model="number"
      :error-messages="numberErrors"
      :counter="10"
      label="Number"
      required
      @input="$v.number.$touch()"
      @blur="$v.number.$touch()"
    ></v-text-field>
    <!-- <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="Item"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select> -->
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Do you agree?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>
    <router-link to="/userDetails" class="mr-4">
    <button :disabled="!valid" @click="submit">
      Register</button>
      </router-link>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
</template>
    
    </div>
    
</template>

<script >
 import { validationMixin } from 'vuelidate'
 import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
    name: 'Register',
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(20) },
      email: { required, email },
      date: { required },
      number: { required, maxLength: maxLength(10) },
    //   select: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      valid:true,
      name: '',
      email: '',
      number:'',
      date:'',
      checkbox: false,
    }),

    computed: {
      details()
      {
        return this.$store.state.details
      },
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
    //   selectErrors () {
    //     const errors = []
    //     if (!this.$v.select.$dirty) return errors
    //     !this.$v.select.required && errors.push('Item is required')
    //     return errors
    //   },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 20 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      dateErrors () {
        const errors = []
        if (!this.$v.date.$dirty) return errors
        !this.$v.date.maxLength && errors.push('date must be entered')
        !this.$v.date.required && errors.push('date is required.')
        return errors
      },
      numberErrors () {
        const errors = []
        if (!this.$v.number.$dirty) return errors
        !this.$v.number.maxLength && errors.push('Number must be of 10 characters long')
        !this.$v.number.required && errors.push('Number is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit () {
        var data={
          name:this.name,
          email:this.email,
          number:this.number,
          date:this.date
        }
        this.details.push(data);
  console.log(this.loginform)
        // this.$router.push('/users');
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>
<style scoped>
.main {
  margin-left: 160px;
  padding: 0px 10px;
}
</style>
