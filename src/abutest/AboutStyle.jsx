import styled from "styled-components";
export const AboutStyle = styled.div`
  /* & body { */
  background: #f5f5f5;
  /*  header =================================================================*/
  & .container {
    margin-left: 106px;
    margin-right: 106px;
    @media (max-width: 600px) {
      margin-left: 60px;
      margin-right: 60px;
      @media (max-width: 450px) {
        margin-left: 20px;
        margin-right: 20px;
        @media (max-width: 400px) {
          margin-left: 0px;
          margin-right: 0px;
        }
      }
    }
    & .sc-bdfCDU_gaNVMT {
      left: 0px;
      position: fixed;
      top: 0px;
      width: 100%;
      z-index: 1000;
      background-color: white;
      & .header_items {
        padding: 10px 0px;
        margin-left: 106px;
        margin-right: 106px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 430px) {
          margin-left: 2px;
          margin-right: 2px;
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        & .logo {
          font-size: 30px;
          align-items: center;
          font-weight: 600;
          cursor: pointer;
          color: black;
          text-decoration: none;
          @media (max-width: 400px) {
            font-size: 20px;
          }
          @media (max-width: 550px) {
            font-size: 25px;
          }
          & img {
            width: 150px;
            @media (max-width: 550px) {
              width: 130px;

              @media (max-width: 400px) {
                width: 100px;
              }
            }
          }
        }
        & ul {
          display: flex;
          align-items: center;
          margin-bottom: 0px;
          & li {
            list-style-type: none;
            margin: 10px;
            color: black;
            & a {
              text-decoration: none;
              color: black;
            }
          }
        }
      }
    }
    /* main ================================================================*/

    & .main-container {
      /* background: rgb(247, 251, 254); */
      padding-top: 40px;
      & .main_container {
        padding-top: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 960px) {
          display: flex;
          flex-direction: column;
          padding-top: 90px;
        }
        & .main-container-text {
          width: 50%;
          & h1 {
            font-size: 55px;
            margin-top: 0;
            margin-bottom: 0.5rem;
            font-weight: 500;
            line-height: 1.2;
            @media (max-width: 940px) {
              font-size: 50px;
              @media (max-width: 840px) {
                font-size: 40px;
                @media (max-width: 740px) {
                  font-size: 30px;

                  @media (max-width: 640px) {
                    font-size: 20px;
                  }
                }
              }
            }
          }
          & .abu {
            color: rgb(70, 111, 255);
          }
          & p {
            font-size: 20px;
            @media (max-width: 940px) {
              font-size: 18px;
            }
          }
          & a {
            text-decoration: none;

            & button {
              cursor: pointer;
              font-weight: 700;
              font-family: Helvetica, "sans-serif";
              transition: all 0.2s ease 0s;
              padding: 10px 20px;
              border-radius: 100px;
              background: rgb(153, 255, 0);
              border: 1px solid transparent;
              display: flex;
              align-items: center;
              font-size: 15px;
              & svg {
                width: 34px;
                margin-left: 10px;
                transition: transform 0.3s ease-in-out 0s;
              }
            }
          }
        }
        & .main-container-img {
          & img {
            width: 96%;
            padding-top: 40px;
          }
        }
      }
    }
    /* test ====================================================================*/
    & .competitions {
      padding: 50px 0px;
      & .competitions_kjn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
        @media (max-width: 550px) {
          display: flex;
          flex-direction: column;
        }
        & h2 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-weight: 500;
          line-height: 1.2;
          color: var(--bs-heading-color);
          margin-top: 0px;
          padding-top: 15px;
        }
        & a {
          text-decoration: none;
          display: flex;
          align-items: center;
          & span {
            background-color: transparent;
            color: inherit;
            text-decoration: none;
            letter-spacing: 2px;
            font-size: 18px;
            padding-right: 15px;
            color: black;
          }
        }
      }
    }
    & .competitions-items {
      display: grid;
      gap: 30px;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      & .card {
        border-radius: 12px;
        border: none;
        border-radius: 24px;
        border: 1px solid rgb(202, 211, 223);
        background: rgb(255, 255, 255);
        margin-left: 15px;
        width: 100%;
        @media (max-width: 400px) {
          width: 90%;
        }
        & .comp-image {
          height: 250px;
          border-radius: 12px;
          & img {
            width: 330px;
            height: 250px;
            border-top-left-radius: 24px;
            border-top-right-radius: 24px;
            border: 1px solid rgb(202, 211, 223);
            background: rgb(255, 255, 255);
            width: 100%;
            object-fit: cover;
          }
        }
        & .comp-text {
          padding: 20px;
          border-bottom-right-radius: 24px;
          border-bottom-left-radius: 24px;
          & .mb-md-2_mb-0 {
            font-size: calc(1.3rem + 0.6vw);
            margin-top: 0;
            margin-bottom: 0.5rem;
            font-weight: 500;
            line-height: 1.2;
            color: var(--bs-heading-color);
          }
          & .rating {
            cursor: pointer;
            color: gold;
          }
          & .d-flex {
            display: flex !important;
            justify-content: space-between;
            margin-top: 2px;
            margin-bottom: 2px;
          }
          & .d-flex_justify {
            & .btn {
              width: 100%;
              text-decoration: none;
              & .button {
                position: relative;
                width: 100%;
                transition: all 0.3s ease-in-out 0s;
                box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px;
                padding-block: 0.5rem;
                background-color: rgb(0, 107, 179);
                border-radius: 9999px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: rgb(255, 255, 255);
                gap: 10px;
                font-weight: bold;
                border: 3px solid rgba(255, 255, 255, 0.3);
                outline: none;
                overflow: hidden;
                font-size: 15px;
                & .icon {
                  width: 24px;
                  height: 24px;
                  transition: all 0.3s ease-in-out 0s;
                }
              }
            }
          }
        }
      }
    }
  }
  /* Banner =================================================================*/
  & h5 {
    color: #02324a;
    text-align: center;
    font-family: Geologica-Light, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 0px;
    padding-top: 50px;
    @media (max-width: 570px) {
      font-size: 25px;
    }
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    height: auto;
  }

  .swiper-slide img {
    display: block;
    border-radius: 24px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper {
    margin-left: auto;
    margin-right: auto;
  }

  & .container {
    margin-left: 106px;
    margin-right: 106px;
    @media (max-width: 600px) {
      margin-left: 60px;
      margin-right: 60px;
      @media (max-width: 450px) {
        margin-left: 20px;
        margin-right: 20px;
        @media (max-width: 400px) {
          margin-left: 0px;
          margin-right: 0px;
        }
      }
    }

    /* Cards=========================================================== */
    & .cardd {
      & h5 {
        color: #02324a;
        text-align: center;
        font-family: Geologica-Light, sans-serif;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-top: 0px;
        padding-top: 60px;
        @media (max-width: 570px) {
          font-size: 25px;
        }
      }
      & .card_on {
        & .on {
          display: flex;
          @media (max-width: 980px) {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          & .card {
            padding: 36px;
            border-radius: 24px;
            background: #f7fbfe;
            margin: 15px 15px 24px;
            width: calc(50% - 31px);
            @media (max-width: 400px) {
              padding: 36px 7px;
            }
            @media (max-width: 980px) {
              width: 88%;
            }
            & img {
              width: 36px;
            }
            & .card-body {
              padding: 0px;
              padding-top: 24px;
              & h4 {
                color: #02324a;
                font-family: Geologica-Light, sans-serif;
                font-size: 22px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
              }
              & p {
                color: #7c8b9f;
                font-family: Geologica-Light, sans-serif;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
              }
            }
          }
        }
      }
    }

    /*  Faq================================== */
    & .brand {
      color: #02324a;
      text-align: center;
      font-family: Geologica-Light, sans-serif;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    & .faq_on {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      /* padding-bottom: 25px; */
      margin-bottom: 0px;
      padding-bottom: 40px;
      & .accordion_on {
        width: 58%;
        @media (max-width: 760px) {
          width: 100%;
          margin: 0px 20px;
        }

        & .accordion {
          padding: 18px;
          width: 100%;
          min-height: 60px;
          background: #ffffff;
          border: 1px solid rgb(202, 211, 223);
          border-radius: 12px;
          align-items: center;
          justify-content: space-between;

          & .accordion-btn__items {
            display: flex;
            justify-content: space-between;
            align-items: center;
            & h4 {
              flex-shrink: 0;
              color: #02324a;
              padding-left: 8px;
              font-family: Geologica-Light, sans-serif;
              font-size: 20px;
              font-style: normal;
              font-weight: 600;
              line-height: normal;
              /* margin-top: 0px;
              padding-top: 40px; */
              @media (max-width: 900px) {
                width: calc(100% - 150px);
              }
            }
            & img {
              width: 28px;
              height: 28px;
              padding-right: 7px;
              transform: rotate(0deg);
              transition: transform 150ms ease;
            }
          }
          & .active {
            & img {
              transform: rotate(180deg);
              transition: transform 150ms ease;
            }
          }
        }
      }
    }
  }

  /* maqsadli======================================================= */
  & .section-title_text-center {
    color: #02324a;
    text-align: center;
    font-family: Geologica-Light, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 0px;
    padding-top: 20px;
  }
  & .gap-4_d-grid_py-5 {
    gap: 1.5rem !important;
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
    display: grid !important;
    & .goal-card {
      border-radius: 24px;
      background: rgb(247, 251, 254);
      padding: 35px;
      & h4 {
        color: rgb(2, 50, 74);
        font-size: 25px;
        font-weight: 600;
        margin-bottom: 20px;
        margin-top: 0px;
      }
      & p {
        margin-top: 0;
        margin-bottom: 1rem;
      }
    }
  }

  /* Contacts_us ========================================================= */

  & .sc-gKPSgB_eHkElO {
    & .section-title_text-center {
      color: #02324a;
      text-align: center;
      font-family: Geologica-Light, sans-serif;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-top: 0px;
      padding-top: 20px;
    }
    & .untree_co-section {
      padding: 3rem 0px;
      & .block {
        & .row_justify-content-center {
          --bs-gutter-x: 1.5rem;
          --bs-gutter-y: 0;
          display: flex;
          flex-wrap: wrap;
          margin-top: calc(-1 * var(--bs-gutter-y));
          margin-right: calc(-0.5 * var(--bs-gutter-x));
          margin-left: calc(-0.5 * var(--bs-gutter-x));
          justify-content: center !important;
          & .col-md-8_col-lg-8_pb-4 {
            max-width: 100%;
            padding-right: calc(var(--bs-gutter-x) * 0.5);
            padding-left: calc(var(--bs-gutter-x) * 0.5);
            margin-top: var(--bs-gutter-y);
            /* flex: 0 0 auto;
            width: 66.66666667%; */
            & .row_mb-5 {
              --bs-gutter-x: 1.5rem;
              --bs-gutter-y: 0;
              display: flex;
              flex-wrap: wrap;
              flex-direction: column;
              margin-top: calc(-1 * var(--bs-gutter-y));
              margin-right: calc(-0.5 * var(--bs-gutter-x));
              margin-left: calc(-0.5 * var(--bs-gutter-x));
              margin-bottom: 3rem !important;
              & .col-lg-4_mb-4 {
                margin-bottom: 1.5rem !important;
                flex-shrink: 0;
                width: 100%;
                max-width: 100%;
                padding-right: calc(var(--bs-gutter-x) * 0.5);
                padding-left: calc(var(--bs-gutter-x) * 0.5);
                margin-top: var(--bs-gutter-y);
                &
                  .service_no-shadow_align-items-center_link_horizontal_d-flex_active {
                  display: flex !important;
                  align-items: center !important;
                  line-height: 1.5;
                  align-items: center;
                  & .service-icon_color-1 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 10px;
                    flex: 0 0 50px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    background: rgb(60, 191, 241);
                    margin-right: 20px;
                    color: white;
                  }
                  & .service-contents {
                    font-weight: 400;
                    line-height: 20px;
                    color: rgb(106, 106, 106);
                    align-items: center;
                    font-size: 18px;
                    margin: 0px;
                  }
                }
              }
            }
            & .row {
              --bs-gutter-x: 1.5rem;
              --bs-gutter-y: 0;
              display: flex;
              flex-wrap: wrap;
              margin-top: calc(-1 * var(--bs-gutter-y));
              margin-right: calc(-0.5 * var(--bs-gutter-x));
              margin-left: calc(-0.5 * var(--bs-gutter-x));
              & .col-6 {
                flex: 0 0 auto;
                width: 50%;
                & .form-group {
                  font-weight: 400;
                  line-height: 28px;
                  font-size: 14px;
                  margin-left: 10px;
                  color: rgb(106, 106, 106) !important;
                  & .text-black {
                    font-weight: 400;
                    line-height: 28px;
                    font-size: 14px;
                    margin-left: 5px;
                    color: rgb(106, 106, 106) !important;
                    --bs-text-opacity: 1;
                    display: inline-block;
                    & span {
                      font-size: 14px;
                      margin-left: 5px;
                      color: red;
                    }
                  }
                  & .form-control {
                    height: 50px;
                    border-radius: 10px;
                    background-color: rgb(191 198 196);
                    /* display: block; */
                    width: 90%;
                    padding: 0.375rem 0.75rem;
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 1.5;
                    color: var(--bs-body-color);
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    /* background-color: var(--bs-body-bg); */
                    background-clip: padding-box;
                    border: var(--bs-border-width) solid var(--bs-border-color);
                    /* border-radius: var(--bs-border-radius); */
                    transition: border-color 0.15s ease-in-out,
                      box-shadow 0.15s ease-in-out;
                  }
                }
              }
            }
            & .form-group {
              font-weight: 400;
              line-height: 28px;
              font-size: 14px;
              /* margin-left: 5px; */
              color: rgb(106, 106, 106) !important;
              & .text-black {
                font-weight: 400;
                line-height: 28px;
                font-size: 14px;
                margin-left: 5px;
                color: rgb(106, 106, 106) !important;
                --bs-text-opacity: 1;
                display: inline-block;
                & span {
                  font-size: 14px;
                  margin-left: 5px;
                  color: red;
                }
              }
              & .form-control {
                height: 50px;
                border-radius: 10px;
                background-color: rgb(191 198 196);
                /* display: block; */
                width: 98%;
                padding: 0.375rem 0.75rem;
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: var(--bs-body-color);
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                /* background-color: var(--bs-body-bg); */
                background-clip: padding-box;
                border: var(--bs-border-width) solid var(--bs-border-color);
                /* border-radius: var(--bs-border-radius); */
                transition: border-color 0.15s ease-in-out,
                  box-shadow 0.15s ease-in-out;
              }
            }
            & .form-group_mb-5 {
              margin-bottom: 3rem !important;
              & .text-black {
                font-weight: 400;
                line-height: 28px;
                font-size: 14px;
                margin-left: 5px;
                color: rgb(106, 106, 106) !important;
                display: inline-block;
                --bs-text-opacity: 1;
                & span {
                  font-size: 14px;
                  margin-left: 5px;
                  color: red;
                }
              }
              & .form-control {
                height: 130px;
                border-radius: 10px;
                background-color: rgb(239, 242, 241);
                background-color: rgb(191 198 196);
                /* overflow: scroll; */
                height: auto !important;
                min-height: calc(
                  1.5em + 0.75rem + calc(var(--bs-border-width) * 2)
                );
                display: block;
                width: 98%;
                padding: 0.375rem 0.75rem;
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: var(--bs-body-color);
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                /* background-color: var(--bs-body-bg); */
                background-clip: padding-box;
                border: var(--bs-border-width) solid var(--bs-border-color);
                /* border-radius: var(--bs-border-radius); */
                transition: border-color 0.15s ease-in-out,
                  box-shadow 0.15s ease-in-out;
              }
            }
            & .btn_btn-primary-hover-outline_w-100 {
              width: 100% !important;
              text-align: center;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              height: 52px;
              padding: 0px 20px;
              background-color: black;
              font-size: 16px;
              font-weight: 600;
              color: rgb(255, 255, 255);
              border-radius: 25px;
              border: 2px solid black;
              text-decoration: none;
              cursor: pointer;
              white-space: nowrap;
              gap: 8px;
              transition: all 0.2s ease 0s;
            }
          }
        }
      }
    }
  }

  /* Row ================================================================*/

  & .brand {
    color: #02324a;
    text-align: center;
    font-family: Geologica-Light, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 0px;
    padding-top: 40px;
  }
  section.slide-option {
    margin-left: 0px;
    margin-right: 0px;
    margin: 0 0 0px 0;
    .no-marg {
      margin: 0 0 0 0;
    }
  }

  div.highway-slider {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 150px;
    div.highway-barrier {
      position: relative;
    }
    ul.highway-lane {
      display: flex;
      height: 100%;
      li.highway-car {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        color: #343434;
      }
    }
  }

  @keyframes translatestf {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-500%);
    }
  }
  #stffull div.highway-barrier {
    ul.highway-lane {
      width: 500%;
      li.highway-car {
        animation: translatestf 30s linear infinite;
        h4 {
          font-size: 28px;
        }
        & img {
          margin: 12px;
          width: 250px;
          overflow: hidden;
          border-radius: 24px;
        }
      }
    }
  }

  @keyframes translateinfinite {
    100% {
      transform: translateX(calc(-180px * 12));
    }
  }
  #infinite div.highway-barrier {
    background: #fff;
    overflow: hidden;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgb(0, 0, 0) 12.5%,
      rgb(0, 0, 0) 87.5%,
      rgba(0, 0, 0, 0) 100%
    );

    &::before,
    &::after {
      content: " ";
      position: absolute;
      z-index: 9;
      width: 180px;
      height: 100%;
    }
    &::before {
      top: 0;
      left: 0;
    }
    &::after {
      top: 0;
      right: 0;
    }
    ul.highway-lane {
      width: calc(180px * 24);
      li.highway-car {
        animation: translateinfinite 25s linear infinite;
        span.fab {
          font-size: 65px;
        }
        & img {
          margin: 12px;
          width: 250px;
          border-radius: 24px;
        }
      }
    }
  }

  #red {
    background: #cb5454;
  }
  #orange {
    background: #cb8054;
  }
  #yellow {
    background: #cbba54;
  }
  #green {
    background: #69b46e;
  }
  #blue {
    background: #6091b0;
  }

  /*  foote===================================== */
  & .foter {
    background: black;
    & .fot {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 32px 0px 24px;
      padding-left: 50px;
      padding-right: 40px;
      width: 90%;
      height: 100%;
      margin: 0 auto;
      max-width: 1210px;
      @media (max-width: 900px) {
        padding-left: 0px;
        padding-right: 0px;
        @media (max-width: 600px) {
          display: flex;
          flex-direction: column;
          @media (max-width: 400px) {
            padding-left: 0px;
            padding-right: 0px;
            margin: 0px;
          }
        }
      }
      & .img {
        & .d-flex_flex-wrap {
          text-decoration: none;
          display: flex;
          padding: 0px;
          @media (max-width: 400px) {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          & .list-unstyled {
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
            text-decoration: none;
            margin-right: 20px;
            & .text-white {
              color: #f7fbfe;
              text-decoration: none;
            }
          }
        }
      }

      & .hedar_to {
        & img {
          padding-right: 24px;
        }
      }
    }
    & hr {
      color: #5b6c74;
      margin: 0 auto;
      max-width: 1210px;
    }
    & .fot_on {
      display: flex;
      justify-content: space-between;
      padding: 5px 0px 10px;
      padding-left: 50px;
      padding-right: 40px;
      margin: 0 auto;
      max-width: 1210px;
      @media (max-width: 900px) {
        padding-left: 0px;
        padding-right: 0px;
        @media (max-width: 600px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          @media (max-width: 400px) {
            padding-left: 0px;
            padding-right: 0px;
            margin: 0px;
          }
        }
      }
      & p {
        color: #cad3df;
        font-family: Geologica-Light, sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
    }
  }
  /* } */
`;
