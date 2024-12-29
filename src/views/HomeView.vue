<script setup>
import { onMounted, ref } from "vue";
import certificate from "./../data/certificate";
import { useRoute } from "vue-router";
import moment from "moment";
import { celebrate, downloadCertificate } from "@/helper";
import wait from "mk_wait";

const route = useRoute();

const Data = ref({
  id: null,
  name: null,
  certificate: null,
  date: null,
  photo: null,
});

const isOk = ref(false);
const isLoadingDownload = ref(false);

onMounted(async () => {
  const key = route.params.key;
  const index = certificate.findIndex((el) => el.id === key);

  if (index > -1) {
    Data.value = certificate[index];
    isOk.value = true;
    await wait(300);
    celebrate();
  } else {
    isOk.value = false;
  }

  console.log(route.params.key);
});

const downloadPhoto = async (photo, id) => {
  isLoadingDownload.value = true;
  downloadCertificate(photo, id);
  await wait(2000);
  isLoadingDownload.value = false;
};
</script>

<template>
  <div class="box" v-if="isOk">
    <div class="tit">
      <svg
        width="102"
        height="60"
        viewBox="0 0 102 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="logo_certificate"
      >
        <path
          d="M28.0049 19.8623C28.0049 17.2308 28.0049 14.3389 28.0049 11.4614C28.0049 5.80977 32.5864 1.22827 38.238 1.22827H58.4997V1.22827C59.8113 1.22827 61.0703 1.74379 62.0052 2.66365L73.2355 13.7127L83.7814 24.6421C84.2372 25.1145 84.4919 25.7454 84.4919 26.4018V26.4018V66.7205C84.4919 72.3721 79.9104 76.9537 74.2588 76.9537H42.3228"
          stroke="white"
          stroke-width="2.45596"
          stroke-linecap="round"
        ></path>
        <path
          d="M59.9321 0.818451V2.86508V19.2381C59.9321 22.8552 62.8643 25.7874 66.4814 25.7874H84.2871"
          stroke="white"
          stroke-width="2.45596"
        ></path>
        <path
          d="M18.3859 59.5567L18.3859 77.0069C18.3859 77.3338 18.7503 77.5288 19.0223 77.3474L25.6195 72.9493C26.4444 72.3994 27.5191 72.3994 28.3441 72.9493L34.9413 77.3474C35.2133 77.5288 35.5776 77.3338 35.5776 77.0069L35.5776 59.5567"
          stroke="white"
          stroke-width="2.45596"
        ></path>
        <path
          d="M24.0329 26.388C25.657 27.2104 27.5792 27.1937 29.1886 26.343C30.629 25.5816 32.4122 26.0428 33.3029 27.407C34.2981 28.9313 35.9712 29.8779 37.7904 29.9459C39.4184 30.0067 40.7321 31.2977 40.8214 32.9245C40.9211 34.7422 41.8968 36.3985 43.4382 37.367C44.8178 38.2337 45.31 40.0086 44.5739 41.462C43.7514 43.0861 43.7682 45.0083 44.6189 46.6177C45.3802 48.0581 44.919 49.8413 43.5549 50.732C42.0305 51.7272 41.084 53.4003 41.016 55.2195C40.9551 56.8476 39.6641 58.1613 38.0374 58.2505C36.2197 58.3503 34.5634 59.3259 33.5949 60.8674C32.7281 62.2469 30.9533 62.7391 29.4998 62.003C27.8758 61.1805 25.9536 61.1973 24.3441 62.048C22.9037 62.8093 21.1205 62.3482 20.2298 60.984C19.2346 59.4597 17.5615 58.5131 15.7424 58.4451C14.1143 58.3842 12.8006 57.0933 12.7113 55.4665C12.6116 53.6488 11.636 51.9925 10.0945 51.024C8.71497 50.1573 8.22276 48.3824 8.95883 46.9289C9.78132 45.3049 9.76454 43.3827 8.91384 41.7732C8.15251 40.3328 8.61368 38.5496 9.97786 37.659C11.5022 36.6637 12.4488 34.9907 12.5168 33.1715C12.5776 31.5434 13.8686 30.2297 15.4953 30.1404C17.3131 30.0407 18.9694 29.0651 19.9378 27.5236C20.8046 26.1441 22.5795 25.6519 24.0329 26.388Z"
          stroke="#FFF4A3"
          stroke-width="2.45596"
        ></path>
      </svg>
      <h1>{{ Data.certificate }}</h1>
      <div class="completion-date">
        <svg
          id="svgCheckMark"
          class="disabled"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="#798488"
          xmlns="http://www.w3.org/2000/svg"
          style="fill: rgb(5, 152, 98)"
        >
          <path
            d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z"
          ></path>
          <path
            d="M15.7727 6.83362L10.0685 14.5745C9.93246 14.7549 9.7296 14.8732 9.50552 14.9027C9.28143 14.9321 9.0549 14.8703 8.87683 14.7311L4.8035 11.4745C4.44405 11.1868 4.38585 10.6622 4.6735 10.3028C4.96115 9.94334 5.48572 9.88514 5.84516 10.1728L9.24183 12.8903L14.431 5.84778C14.6012 5.59244 14.8979 5.45127 15.2033 5.48032C15.5088 5.50936 15.7736 5.70393 15.8926 5.98676C16.0116 6.2696 15.9655 6.59494 15.7727 6.83362Z"
            fill="white"
          ></path>
        </svg>
        Completed:
        <span id="completionDate">
          {{ moment(Data.date, "MM/DD/YYYY").format("ll") }}
        </span>
      </div>
      <button
        class="download"
        @click="downloadPhoto(Data.photo, Data.id)"
        :disabled="isLoadingDownload"
      >
        <x-icon
          :icon="
            isLoadingDownload
              ? 'svg-spinners:180-ring'
              : 'gravity-ui:arrow-down'
          "
        />
        Download certificate
      </button>

      <a
        id="learnMoreTxt"
        target="_blank"
        class="learn-more-text"
        href="https://campus.w3schools.com/collections/course-catalog/products/web-application-development-course"
        >Learn more about this exam</a
      >
    </div>
    <div class="photo">
      <img :src="Data.photo" alt="test" />
    </div>
  </div>
  <div class="box" v-else>
    <div id="errors" class="error-wrp">
      <svg
        width="234"
        height="53"
        viewBox="0 0 234 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.2422 16.5898V13.5625H6.10156V16.5898H20.2422ZM29.5391 13.5625L40.7109 44.4414H45.0273L33.8555 13.5625H29.5391ZM69.7539 45.6914V42H51.9023V45.6914H69.7539ZM79.8125 30.4375V30.7695C79.8125 32.6315 79.9557 34.3763 80.2422 36.0039C80.5286 37.6185 80.9128 39.1159 81.3945 40.4961C81.8763 41.8893 82.4362 43.1523 83.0742 44.2852C83.7253 45.431 84.4089 46.4466 85.125 47.332C85.8411 48.2174 86.5703 48.9661 87.3125 49.5781C88.0547 50.2031 88.7708 50.6849 89.4609 51.0234L90.3984 48.4062C89.8776 48.0026 89.3568 47.5013 88.8359 46.9023C88.3151 46.3034 87.8138 45.6133 87.332 44.832C86.8763 44.0638 86.4401 43.1784 86.0234 42.1758C85.6198 41.1732 85.2617 40.0859 84.9492 38.9141C84.7018 37.9375 84.487 36.7526 84.3047 35.3594C84.1224 33.9531 84.0312 32.4362 84.0312 30.8086V30.3984C84.0312 28.7318 84.1224 27.1823 84.3047 25.75C84.5 24.3177 84.7604 23.0091 85.0859 21.8242C85.4375 20.5612 85.8542 19.3958 86.3359 18.3281C86.8307 17.2604 87.3581 16.3294 87.918 15.5352C88.3216 14.9753 88.7318 14.474 89.1484 14.0312C89.5651 13.5885 89.9818 13.2109 90.3984 12.8984L89.4609 10.1836C88.7708 10.5221 88.0547 11.0039 87.3125 11.6289C86.5703 12.2409 85.8477 12.9896 85.1445 13.875C84.4284 14.7604 83.7448 15.776 83.0938 16.9219C82.4557 18.0677 81.8893 19.3242 81.3945 20.6914C80.9128 22.0846 80.5286 23.6016 80.2422 25.2422C79.9557 26.8698 79.8125 28.6016 79.8125 30.4375ZM115.2 11.96L112.16 12.96C113.16 15.08 115.4 21.24 116.08 23.52L119.2 22.44C118.52 20.2 116.08 13.84 115.2 11.96ZM133 14.52L129.28 13.44C128.52 19.48 126.04 25.88 122.88 29.92C118.84 35.04 112.88 38.88 107.2 40.56L109.92 43.32C115.6 41.32 121.48 37.2 125.6 31.76C128.92 27.44 131.04 21.76 132.28 16.76C132.44 16.16 132.72 15.16 133 14.52ZM104.04 14.36L100.92 15.48C101.84 17.24 104.6 24 105.36 26.48L108.56 25.32C107.6 22.68 105.12 16.6 104.04 14.36ZM153.953 30.7695V30.4375C153.953 28.5755 153.803 26.8503 153.504 25.2617C153.204 23.6602 152.814 22.1693 152.332 20.7891C151.85 19.3958 151.284 18.1328 150.633 17C149.982 15.8542 149.285 14.8255 148.543 13.9141C147.827 13.0286 147.085 12.2734 146.316 11.6484C145.561 11.0104 144.832 10.5221 144.129 10.1836L143.211 12.8008C143.615 13.1133 144.025 13.5039 144.441 13.9727C144.871 14.4284 145.281 14.9492 145.672 15.5352C146.232 16.3555 146.766 17.3255 147.273 18.4453C147.794 19.5651 148.237 20.8281 148.602 22.2344C148.875 23.3151 149.103 24.5391 149.285 25.9062C149.467 27.2734 149.559 28.7708 149.559 30.3984V30.8086C149.559 32.3841 149.474 33.849 149.305 35.2031C149.148 36.5573 148.927 37.8073 148.641 38.9531C148.341 40.1901 147.97 41.3164 147.527 42.332C147.098 43.3607 146.635 44.2786 146.141 45.0859C145.672 45.8151 145.19 46.4596 144.695 47.0195C144.201 47.5794 143.706 48.0417 143.211 48.4062L144.129 51.0234C144.832 50.6849 145.561 50.2031 146.316 49.5781C147.072 48.9531 147.814 48.1849 148.543 47.2734C149.272 46.388 149.962 45.3724 150.613 44.2266C151.264 43.0807 151.837 41.8112 152.332 40.418C152.827 39.0378 153.217 37.5404 153.504 35.9258C153.803 34.3112 153.953 32.5924 153.953 30.7695ZM181.824 45.6914V42H163.973V45.6914H181.824ZM193.895 44.4414L205.047 13.5625H200.77L189.598 44.4414H193.895ZM228.406 16.5898V13.5625H214.266V16.5898H228.406Z"
          fill="#DEE2E6"
        ></path>
      </svg>
      <span class="error-header">
        Sorry, we couldn't load the certificate
      </span>
      <span class="error-text">
        Please try to reload the page or contact support
      </span>
      <button class="btn reload-btn" onclick="reloadPage()">Reload</button>
    </div>
  </div>
  <span class="copyright"
    >© 1999 - {{ moment().format("YYYY") }} W3schools.</span
  >
</template>

<style lang="scss" scoped>
@use "./../assets/color" as *;
.box {
  //background: red;

  width: calc(100vw - 20px);
  max-width: 1200px;
  min-height: 330px;
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 20px;
  .tit {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(121, 132, 136, 0.4);
    border-radius: 6px;

    .learn-more-text {
      margin-top: 44px;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 0.875rem;
      color: white;
      text-decoration: none;
    }
    svg.logo_certificate {
      height: 50px;
    }
    h1 {
      text-transform: capitalize;
      color: #fff;
      font-weight: 500;
      font-size: 1.7rem;
      line-height: 1.7rem;
      margin-block: 20px;
    }
    .completion-date {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #fff;
      font-size: 0.875rem;
    }
    button.download {
      display: inline;
      background: #fff;
      padding-block: 6px;
      padding-inline: 16px;
      border: none;
      font-weight: 500;
      font-size: 0.875rem;
      color: $black;
      border-radius: 30px;
      cursor: pointer;
      margin-top: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      .iconify {
        font-size: 0.875rem;
      }
    }
  }
  .photo {
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    clip-path: inset(0 round 6px);
    img {
      width: 100%;
    }
  }
  .error-wrp {
    grid-column: 1/-1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .error-header {
      padding-top: 20px;
      font-size: 1.4rem;
      font-weight: 600;
    }
    .reload-btn {
      margin-top: 20px;
      padding: 10px 30px;
      height: 51px;
      background: white;
      border-radius: 25px;
      border-width: 0px;
      font-weight: 600;
      font-size: 1rem;
      line-height: 23px;
      color: #282a35;
      white-space: nowrap;
      cursor: pointer;
    }
    .error-text,
    .error-header {
      line-height: 24px;
      letter-spacing: 0;
      text-align: center;
      color: #fff;
    }
    .error-text {
      margin-top: 10px;
    }
  }
}

span.copyright {
  font-size: 0.875rem;
  color: #fff;
  opacity: 0.7;
  margin-top: auto;
}

@media screen and (max-width: 768px) {
  .box {
    grid-template-columns: 1fr;
    padding: 15px 0;
    gap: 15px;
  }
  .box .tit {
    padding-block: 20px;
    h1 {
      font-size: 1.7rem;
    }
  }
  .box .tit button.download {
    display: none;
  }
  .box .tit svg.logo_certificate {
    height: 35px;
  }
}
</style>
