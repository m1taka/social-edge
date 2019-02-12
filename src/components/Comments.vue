<template>
    <div>
    <div class="comments">
      <div class="container">
        <div class="col-md-15">
          <div class="panel panel-default">
            <div class="panel-body">
              <section class="post-heading">
                <div class="row">
                  <div class="col-md-11">
                    <div class="media">
                      <div class="media-left">
                        <img
                          class="media-object photo-profile"
                          src="../assets/img/profile1.jpg"
                          width="40"
                          height="40"
                          alt="..."
                        >
                      </div>
                      <div class="media-body">
                        <div class="anchor-username">
                          <h4 class="media-heading">John Doe</h4>
                        </div>
                        <div class="anchor-time">51 mins</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-1">
                    <i class="glyphicon glyphicon-chevron-down"></i>
                  </div>
                </div>
              </section>
              <section class="post-body">
                <p>Nullam faucibus nisl eleifend lectus tincidunt, quis dictum lorem sollicitudin. Nulla sagittis tristique nisl, ac porttitor libero fermentum vitae.</p>
              </section>
              <section class="post-footer">
                <hr>
                <div class="post-footer-option container">
                  <ul class="list-unstyled">
                    <li>
                      <i class="glyphicon glyphicon-thumbs-up"></i>
                      Like
                    </li>
                    <li>
                      <i class="glyphicon glyphicon-comment"></i>
                      Comment
                    </li>
                    <li>
                      <i class="glyphicon glyphicon-share-alt"></i>
                      Share
                    </li>
                  </ul>
                </div>
              </section>
              <div class="post-footer-comment-wrapper subcomment">
                <div class="comment-form"></div>
                <div class="comment">
                  <div class="media">
                    <div class="media-left">
                      <img
                        class="media-object photo-profile"
                        src="../assets/img/profile2.jpg"
                        width="32"
                        height="32"
                        alt="..."
                      >
                    </div>
                    <div class="media-body">
                      <div href="#" class="anchor-username">
                        <h4 class="media-heading">Omar Hassan</h4>
                      </div>
                      <div href="#" class="anchor-time">49 mins</div>
                    </div>
                  </div>
                </div>
                <section class="post-body">
                  <p>Morbi in dapibus mauris. Donec semper, tellus eu maximus faucibus, leo dui blandit ex, at porttitor velit ante a purus. Proin tempus congue risus, id condimentum velit vulputate nec...</p>
                </section>
                <section class="post-footer">
                  <hr>
                  <div class="post-footer-option container">
                    <ul class="list-unstyled">
                      <li>
                        <i class="glyphicon glyphicon-thumbs-up"></i>
                        Like
                      </li>
                      <li>
                        <i class="glyphicon glyphicon-comment"></i>
                        Comment
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <div class="post-footer-comment-wrapper subcomment">
                <div class="comment-form"></div>
                <div class="comment">
                  <div class="media">
                    <div class="media-left">
                      <img
                        class="media-object photo-profile"
                        src="../assets/img/profile1.jpg"
                        width="32"
                        height="32"
                        alt="..."
                      >
                    </div>
                    <div class="media-body">
                      <div href="#" class="anchor-username">
                        <h4 class="media-heading">John Doe</h4>
                      </div>
                      <div href="#" class="anchor-time">46 mins</div>
                    </div>
                  </div>
                </div>
                <section class="post-body">
                  <p>Mauris augue magna, eleifend ut augue sit amet, vulputate posuere massa. Fusce a interdum velit, et hendrerit nulla. Ut euismod pretium finibus. Nullam sodales vestibulum pulvinar.</p>
                </section>
                <section class="post-footer">
                  <hr>
                  <div class="post-footer-option container">
                    <ul class="list-unstyled">
                      <li>
                        <i class="glyphicon glyphicon-thumbs-up"></i>
                        Like
                      </li>
                      <li>
                        <i class="glyphicon glyphicon-comment"></i>
                        Comment
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
            <div class="panel-body">
              <div class="comment-form"></div>
              <div class="comment">
                <div class="media">
                  <div class="media-left">
                    <img
                      class="media-object photo-profile"
                      src="../assets/img/profile3.jpg"
                      width="32"
                      height="32"
                      alt="..."
                    >
                  </div>
                  <div class="media-body">
                    <div href="#" class="anchor-username">
                      <h4 class="media-heading">Wang Shu</h4>
                    </div>
                    <div href="#" class="anchor-time">32 mins</div>
                  </div>
                </div>
                <section class="post-body">
                  <p>Pellentesque posuere orci vel molestie dapibus. Sed sed nisi eu elit suscipit dapibus. Nullam finibus accumsan tempor. Nam mattis felis est, ac facilisis ex auctor vitae. Donec volutpat ligula a ipsum porta aliquet.</p>
                </section>
                <section class="post-footer">
                  <hr>
                  <div class="post-footer-option container">
                    <ul class="list-unstyled">
                      <li>
                        <i class="glyphicon glyphicon-thumbs-up"></i>
                        Like
                      </li>
                      <li>
                        <i class="glyphicon glyphicon-comment"></i>
                        Comment
                      </li>
                      <li>
                        <i class="glyphicon glyphicon-share-alt"></i>
                        Share
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.post-footer-comment-wrapper {
    background-color: #ffffff;
}
.subcomment {
  /* padding-left: 32px; */
  /* padding: 15px; */
  padding: 15px 0 0px 50px;
}
.container {
    text-align: left;
}
p {
    font-size: 14px;
}
</style>