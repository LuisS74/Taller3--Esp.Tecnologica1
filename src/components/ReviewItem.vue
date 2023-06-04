<template>
    <div class="container py-3 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-lg-9 col-xl-7">
          <div class="card" style="border-radius: 10px;">
            <div class="card-body p-3">
              <div class="row g-0">
                <div class="col-md-2">
                  <img :src="review.user.photo" class="img-fluid rounded-start" alt="">
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h3>{{ review.user.name }}</h3>
                    <p class="card-text">{{ review.review }}</p>
                  </div>
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
    name: 'ReviewItem',
    props: {
      review: {
        type: Object,
        required: true,
      },
    },
  };
  </script>