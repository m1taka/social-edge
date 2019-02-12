<template>
  <div class="content-wrapper">
    <div class="content">
      <div class="title">
        <h2>Nam elementum mattis velit in lacinia? Sed ut.</h2>
      </div>
      <div class="author">
        <div class="info-left-wrapper">
          <img src="../assets/img/picture-5.png" alt="image-author">
          <div class="info-left">
            <p>by Tyler Durden</p>
            <!-- <p>{{date | moment("dddd, MM/DD/YYYY")}}</p> -->
            <!-- <p>Thu, 01/10/2019 - 13:25</p> -->
          </div>
        </div>
        <div class="info-right-wrapper">
          <div class="shares">
            <p class="shares-number">227</p>
            <p class="shares-text">SHARES</p>
          </div>
          <div class="icons">
            <img src="../assets/img/twitter.png" alt="twitter-icon">
            <img src="../assets/img/facebook.png" alt="facebook-icon">
            <img src="../assets/img/instagram.png" alt="instagram-icon">
          </div>
        </div>
      </div>
      <div class="image-wrapper">
        <img class="main-img" src="../assets/img/image.png" alt="image">
      </div>
    
    <div class="text">
      <strong>
        <p>Praesent ex elit, pharetra sed gravida nec?</p>
      </strong>
      <p>Nunc tempor viverra felis vitae congue. Aenean vitae efficitur sem. Donec a hendrerit quam. Etiam quis viverra nisi. Mauris commodo odio bibendum, ornare ex id, fermentum velit. Etiam luctus diam hendrerit urna rutrum, ac pharetra odio bibendum. Nulla condimentum eget velit sit amet iaculis. Curabitur tempus eros eros, id dignissim lorem malesuada ut. Donec mattis molestie sapien id viverra. Integer luctus nibh eget neque accumsan bibendum. Nulla blandit, lectus sed pharetra euismod, lacus purus venenatis est, sit amet luctus tortor sem quis sem. Praesent ultricies feugiat lacus, non iaculis nibh malesuada eget. Morbi eu mi enim. Maecenas at velit porta, viverra felis quis, malesuada enim. Maecenas vel tincidunt orci.</p>
      <p>Ut bibendum ullamcorper dolor, a porttitor enim faucibus nec. Nunc pretium justo dolor, quis pulvinar neque facilisis a. Donec non consequat ex. Quisque eu leo leo. Ut feugiat risus justo, non vulputate dui rhoncus non. Cras vel lacus tempor, tristique magna eget, aliquam sapien. Donec dignissim lectus at maximus tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse blandit nulla metus, ut rutrum ipsum tincidunt ac. Fusce felis lectus, vehicula a accumsan et, volutpat in tellus. Nunc consequat libero enim, nec convallis enim interdum nec. Vivamus sagittis rutrum commodo. Aenean et pretium nibh. Sed vitae varius odio, in pharetra tellus. Nunc nunc dui, accumsan non ex et, lacinia egestas nisi.</p>
      <p>Morbi lorem neque, egestas vitae condimentum non, finibus id neque. In hac habitasse platea dictumst. Morbi molestie ex sed odio iaculis elementum. Curabitur congue eget est a tincidunt. Pellentesque consequat velit et purus dictum, a egestas orci lobortis. Suspendisse turpis dui, semper vel eros eget, varius ornare felis. Pellentesque eu dui commodo, tempus est id, pellentesque nibh. Cras id scelerisque arcu. In sodales a nisl sed pellentesque. Maecenas massa risus, bibendum id venenatis vitae, luctus sed purus. Quisque suscipit leo a nisi sodales molestie. Sed posuere euismod odio sit amet tempor. Ut mauris nulla, vehicula sit amet dolor quis, gravida lacinia diam.</p>
      <p>Nam eleifend mauris dolor, sed lacinia massa imperdiet at. Etiam luctus pretium velit at iaculis. Vivamus vel metus at mi viverra suscipit in eu enim. Donec congue mollis volutpat. Vestibulum vitae arcu lectus. Fusce tempor vel metus vitae dapibus. Donec in velit fringilla mauris malesuada rhoncus pulvinar id orci. Pellentesque luctus velit et libero feugiat, tincidunt facilisis dolor dictum. Proin aliquet dignissim dignissim. Sed vel ultrices neque, et tempus quam. Sed porta commodo auctor.</p>
      <button
        class="btn-survey"
        @click="showSurvey()"
      >Pellentesque id erat sapien…</button>
    </div>
    <div class="survey-wrapper" v-if="this.isShown == true">
      <div id="surveyContainer">
        <survey :survey="survey"></survey>
      </div>
      <!-- <button>{{surveyResults}}</button> -->
    </div>
    <div class="button-video-wrapper">
      <a href=""><button class="button-video">Watch Video</button></a>
    </div>
    <Comments/>
  </div>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import "bootstrap/dist/css/bootstrap.css";
import Comments from "./Comments.vue";

const Survey = SurveyVue.Survey;
Survey.cssType = "bootstrap";

//And initialize widgets you are want to use

export default {
  components: {
    Survey,
    Comments
  },
  data() {
    //Define Survey JSON
    var json = {
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "radiogroup",
              name: "q1",
              title: "Sed eu augue id felis fringilla aliquet laoreet non?",
              choices: [
                {
                  value: "a1",
                  text: "Sed tincidunt sed eros quis."
                },
                {
                  value: "a2",
                  text: "Nam dictum est in mauris."
                }
              ]
            }
          ]
        },
        {
          name: "page2",
          elements: [
            {
              type: "radiogroup",
              name: "q2",
              title:
                "Cras porta nibh mauris, vel sollicitudin mi gravida sed?",
              choices: [
                {
                  value: "a1",
                  text: "Yes"
                },
                {
                  value: "a2",
                  text: "No"
                }
              ]
            }
          ]
        },
        {
          name: "page3",
          elements: [
            {
              type: "radiogroup",
              name: "q3",
              title:
                "Vivamus luctus aliquet velit in malesuada. Duis pellentesque neque?",
              choices: [
                {
                  value: "a1",
                  text: "Yes"
                },
                {
                  value: "a2",
                  text: "No"
                }
              ]
            }
          ]
        },
        {
          name: "page4",
          elements: [
            {
              type: "text",
              name: "email",
              title: "Pellentesque viverra sapien eu accumsan tincidunt:",
              validators: [
                {
                  type: "email"
                }
              ],
              inputType: "email",
              placeHolder: "Phasellus dictum quam..."
            }
          ]
        }
      ]
    };
    // console.log(JSON.stringify(json));
    //Create the model and pass it into VueSJ Survey component
    const survey = new SurveyVue.Model(json);
    new Vue({ el: "#surveyContainer", data: { survey: survey } });
    return {
      isShown: false,
      // date: new Date(new Date().setDate(new Date().getDate() - 1)),
      survey: survey,
      email: "",
      surveyResults: "",
      postid: 1,
    };
  },
  methods: {
    showSurvey() {
      this.isShown = true;
    },
    getSurvey() {
      let url = `${process.env.VUE_APP_BASE_URI}/survey/1`;
       this.$http
        .post(url)
        .then(response=>{
          this.survey=response.data.json
          // console.log(this.survey);
        }
        )
        .catch(error => console.log(error));
    }
  },
  mounted() {
    this.survey.onComplete.add(() => {
      let answer = this.survey.data;
      this.surveyResults = answer.q1+"/"+answer.q2+"/"+answer.q3;
      let body = {
        json: this.surveyResults,
        postId: 1,
        email: answer.email
      }
      // console.log(this.survey.data.email);
      let url = `${process.env.VUE_APP_BASE_URI}/results`;
      this.$http
        .post(url, body)
        .then(() => {
          // console.log(this.surveyResults); 
        })
        .catch(error => console.log(error));
    });
  }
  // watch: {
  //   data(to, from) {
  //     this.survey.onComplete;
  //   }
  // }
};
</script>

<style scoped>
p {
  margin-bottom: 0;
  font-size: 14px;
}
.content-wrapper {
  max-width: 900px;
  margin: auto;
  /* margin-top: 75px; */
  padding: 0 2%;
}
.title {
  padding-bottom: 10px;
}
.title h2 {
  font-weight: bold;
}
.content,
.text {
  margin: auto;
}
.content {
  text-align: left;
  padding-top: 15px;
}
.text {
  text-align: justify;
  /* padding-right: 20%; */
}
.text p {
  padding: 0 0 14px;
  font-size: 16px;
}
.text p:first-child {
  padding-top: 15px;
}
.author {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 5px 0px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.author img {
  height: 100%;
  width: 40px;
}
.image-wrapper {
  align-items: left;
  display: flex;
  flex-direction: column;
  padding: 15px 0;
}
.image-wrapper img {
  width: 75%;
}
.info-left-wrapper {
  align-items: center;
  display: flex;
}
.info-right-wrapper {
  text-align: center;
  display: flex;
}
.info-left {
  padding: 0 0 0 16px;
}
.info-left p {
  color: #919191;
  font-size: 11px;
  white-space: nowrap;
}
.shares {
  display: flex;
  flex-direction: column;
  padding: 4px 18px 8px 0;
}
.shares-number {
  font-size: 20px;
  text-align: center;
}
.shares-text {
  color: #919191;
  font-size: 10px;
  font-weight: bold;
  line-height: 1;
  text-align: center;
}
.icons {
  padding-top: 5px;
}
.icons img {
  margin-right: 10px;
  height: auto;
  width: 40px;
}
.survey-wrapper {
  text-align: left;
}
.button-video-wrapper {
  text-align: center;
  align-items: center;
  padding: 20px;
}
.button-video {
  align-items: center;
  background-color: green;
  border-radius: 30px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: bold;
  height: 50px;
  justify-content: center;
  /* margin-left: 10px; */
  outline: 0;
  -webkit-transition: background-color 0.3s;
  -moz-transition: background-color 0.3s;
  -ms-transition: background-color 0.3s;
  -o-transition: background-color 0.3s;
  transition: background-color 0.3s;
  width: 190px;
}
.select {
  border: 0;
  background-color: #f0ffff;
  font-size: 13px;
  width: 300px;
}
.quiz-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.quiz-item label {
  font-size: 13px;
}
.email {
  border: 0;
  background-color: #f0ffff;
  font-size: 13px;
  width: 300px;
  /* outline: 0; */
}
form {
  display: flex;
  flex-direction: column;
}
.button-video:hover {
  background-color: rgb(1, 172, 1);
}
.comments {
  text-align: left;
}
.btn-survey {
  background-color: rgb(248, 205, 153);
  border: 0;
  font-size: 14px;
  font-weight: bold;
  height: 35px;
  outline: 0;
  width: 100%;
}
.btn-survey:hover {
  background-color: bisque;
}
.footer {
  background-color: #f0ffff;
  color: #919191;
  text-align: center;
  padding: 30px;
}
.footer p {
  background-color: #f0ffff;
}
/* .subcomment {
  padding-left: 32px;
} */
@media screen and (max-width: 500px) {
  .author {
    flex-direction: column;
    align-items: normal;
  }
  .info-right-wrapper {
    padding-top: 5px;
  }
  .content-wrapper {
    padding: 0px 20px;
  }
  .text {
    padding-right: 0;
  }
  .icons {
    padding-top: 10px;
  }
  .icons img {
    width: 25px;
  }
}
</style>