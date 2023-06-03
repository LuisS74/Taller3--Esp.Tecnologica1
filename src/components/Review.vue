<template>
    <div class="container py-3 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card" style="border-radius: 10px;">
          <div class="card-body p-3">

            <div class="text-center mb-4 pb-2">
              <img :src="review.product.images[0]" alt="Foto producto" width="100">
            </div>
            <figure class="text-center mb-0">
              <blockquote class="blockquote">
                <p class="pb-3">
                  <i class="fas fa-quote-left fa-xs text-primary"></i>
                  <span class="lead font-italic">{{ review.review }}</span>
                  <i class="fas fa-quote-right fa-xs text-primary"></i>
                </p>
              </blockquote>
              <figcaption class="blockquote-footer mb-0">
                {{ review.product.name }}
              </figcaption>
            </figure>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      
    name: 'Re-View',
    props: {
      review: {
        type: Object,
        default: null,
      }
  },
  
}
</script>