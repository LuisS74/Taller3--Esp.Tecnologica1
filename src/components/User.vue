<template>
    <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-12 col-xl-4">
        <div class="card" style="border-radius: 15px;">
          <div class="card-body text-center">
            <div class="mt-3 mb-4">
              <img :src="user.photo"
                class="rounded-circle img-fluid" style="width: 100px;" />
            </div>
            <h4 class="mb-2">{{user.name}}</h4>
            <p class="text-muted mb-4">{{user.city}} <span class="mx-2">|</span> <a
                href="#!">{{ user.email }}</a></p>

            <div class="d-flex justify-content-between text-center mt-5 mb-2">
              <div>
                <p class="text-muted mb-0">{{ user.bio }}</p>
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
      
    name: 'User-View',
    props: {
      user: {
        type: Object,
        default: null,
      }
  },
  
}
</script>