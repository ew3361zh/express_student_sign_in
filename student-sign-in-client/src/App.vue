<template>
  <div id="app">
    <new-student-form v-on:student-added="newStudentAdded"></new-student-form>
    <student-table 
    v-bind:students="students" 
    v-on:student-arrived-or-left="studentArrivedOrLeft"
    v-on:delete-student="studentDeleted"
    >
    </student-table>
     <student-message v-bind:student="mostRecentStudent"></student-message>
  </div>
</template>

<script>
import NewStudentForm from './components/NewStudentForm.vue'
import StudentMessage from './components/StudentMessage.vue'
import StudentTable from './components/StudentTable.vue'

export default {
  name: 'App',
  components: {
    NewStudentForm,
    StudentMessage,
    StudentTable
  },
  data () {
    return{
      students: [],
      mostRecentStudent: []
    }
  },
  mounted() {
    //load all students - make request to the API
    //mounted runs as the app is created and loads off the page
    this.updateStudents()
  },
  methods: {
    updateStudents() {
      //this will get the very latest list of all the students
      this.$student_api.getAllStudents().then( students => {
        this.students = students
        //this.students is the vue data, students is the promise returned from api
      })
    },
    newStudentAdded (student) {
     this.$student_api.addStudent(student).then( () => {
        this.updateStudents()
     })
     
     
      // this.students.push(student)
      // this.students.sort(function(s1,s2) {
      //   return s1.name.toLowerCase() < s2.name.toLowerCase() ? -1 : +1
      // })
    },
    studentArrivedOrLeft(student, present) {
      
      
      
      // find student in array of students
      // update their present attribute

      // let updateStudent = this.students.find( function(s) {
      //   if (s.name === student.name  && s.starID === student.starID) {
      //     //this is the student we're looking to update
      //     return true
      //   }
      // })

      // if (updateStudent) {
      //   updateStudent.present = present
      //   this.mostRecentStudent = updateStudent
      // }
    },
    studentDeleted(student) {
     

     
      // filter returns a new array of all students for whom the function returns true
      // this.students = this.students.filter(function(s) {
      //   if (s != student) {
      //     return true
      //   }
      // })

      // // clear welcome/goodbye message
      // this.mostRecentStudent={}

    }
  }
}

</script>

<style>
/* as the parent, putting this bootstrap style import here will make the styles apply to all the children pieces as well */
@import "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css";
</style>
