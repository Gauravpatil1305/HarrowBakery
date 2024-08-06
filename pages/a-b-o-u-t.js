import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const ABOUT = () => {
  const router = useRouter();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onLogoContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutTextClick = useCallback(() => {
    router.push("/a-b-o-u-t");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/b-l-o-g");
  }, [router]);

  const onFrameContainerClick1 = useCallback(() => {
    router.push("/c-o-n-t-a-c-t-u-s");
  }, [router]);

  const onSearchContainerClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  const onBasketContainerClick = useCallback(() => {
    router.push("/cart");
  }, [router]);

  const onAboutTextClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='headerContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onShopTextClick = useCallback(() => {
    router.push("/s-h-o-p");
  }, [router]);

  return (
    <div className="w-full relative bg-grayscale-white h-[2602px] overflow-hidden text-left text-lg text-grayscale-white font-quicksand">
      <div className="absolute top-[3px] left-[14px] text-13xl capitalize font-pacifico inline-block w-[244px] h-[66px]">
        Harrow bakery
      </div>
      <div className="absolute top-[165px] left-[470px] w-[375px] flex flex-col items-center justify-center text-center text-16xl text-darkorange-200 font-pacifico">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[52.5px] capitalize">
            about us
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center text-21xl text-black font-quicksand">
          <b className="flex-1 relative tracking-[-1.2px] leading-[72px] capitalize">
            our story
          </b>
        </div>
      </div>
      <img
        className="absolute top-[387px] left-[724px] max-w-full overflow-hidden h-[1259px]"
        alt=""
        src="/vector-6.svg"
      />
      <img
        className="absolute top-[383px] left-[68px] rounded-xl w-[625px] h-[340px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
        alt=""
        src="/rectangle-11@2x.png"
        data-animate-on-scroll
      />
      <img
        className="absolute top-[1282px] left-[64px] rounded-xl w-[625px] h-[340px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
        alt=""
        src="/rectangle-11@2x.png"
        data-animate-on-scroll
      />
      <img
        className="absolute top-[773px] left-[752px] rounded-xl w-[619px] h-[340px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
        alt=""
        src="/rectangle-12@2x.png"
        data-animate-on-scroll
      />
      <div className="absolute top-[446px] left-[716px] rounded-[50%] bg-darkorange-100 w-[15px] h-[15px]" />
      <div className="absolute top-[1346px] left-[717px] rounded-[50%] bg-darkorange-100 w-[15px] h-[15px]" />
      <div className="absolute top-[807px] left-[716px] rounded-[50%] bg-darkorange-100 w-[15px] h-[15px]" />
      <img
        className="absolute top-[455px] left-[752px] max-h-full w-[52px]"
        alt=""
        src="/vector-7.svg"
      />
      <img
        className="absolute top-[1354px] left-[748px] max-h-full w-[52px]"
        alt=""
        src="/vector-7.svg"
      />
      <img
        className="absolute top-[815px] left-[651px] max-h-full w-[52px]"
        alt=""
        src="/vector-7.svg"
      />
      <b className="absolute top-[432px] left-[835px] text-17xl capitalize text-black">
        1978
      </b>
      <b className="absolute top-[1331px] left-[831px] text-17xl capitalize text-black">
        2024
      </b>
      <b className="absolute top-[792px] left-[563px] text-17xl capitalize text-black">
        1996
      </b>
      <div className="absolute top-[356px] left-[956px] w-[369px] flex flex-col items-start justify-start gap-[20px] text-21xl text-black">
        <b className="self-stretch relative capitalize">
          <p className="m-0">Harrow Bakery.</p>
          <p className="m-0">Your Local baker</p>
        </b>
        <div className="self-stretch relative text-xl capitalize">
          <p className="m-0">Harrow Bakery. Your Local Baker.</p>
          <p className="m-0">The quick, brown fox jumps over a lazy dog.</p>
          <p className="m-0 whitespace-pre-wrap">{`  `}</p>
        </div>
      </div>
      <div className="absolute top-[1255px] left-[952px] w-[369px] flex flex-col items-start justify-start gap-[20px] text-21xl text-black">
        <b className="self-stretch relative capitalize">
          <p className="m-0">Harrow Bakery.</p>
          <p className="m-0">Your Local baker</p>
        </b>
        <div className="self-stretch relative text-xl capitalize">
          At Harrow Bakery, we believe in the art of precision. Each pastry is
          crafted with exact measurements and attention to detail, ensuring a
          perfect balance of flavors and textures.
        </div>
      </div>
      <div className="absolute top-[893px] left-[78px] w-[369px] flex flex-col items-start justify-start gap-[20px] text-21xl text-black">
        <b className="self-stretch relative capitalize">
          Pastry Is Different from Cooking.
        </b>
        <div className="self-stretch relative text-xl capitalize">
          <p className="m-0">
            Pastry requires precise measurements and exact timing. Ingredients
            must be weighed accurately, and slight variations can lead to
            significant changes in the final product.
          </p>
          <p className="m-0">{` `}</p>
        </div>
      </div>
      <div
        className="absolute top-[1709px] left-[68px] flex flex-col items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-center text-16xl text-darkorange-600 font-pacifico"
        data-animate-on-scroll
      >
        <div className="w-[1304px] rounded-3xs h-[560px] flex flex-col items-center justify-center py-6 px-5 box-border gap-[26px] bg-[url('/text1@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="self-stretch relative leading-[52px] capitalize">
            get started
          </div>
          <b className="relative text-41xl leading-[66px] capitalize font-quicksand text-grayscale-white">
            <p className="m-0">{`Great Customers Are Using The `}</p>
            <p className="m-0">Confectionery Shop</p>
          </b>
          <div className="w-[442px] rounded-11xl bg-grayscale-white h-[57px] flex flex-row items-center justify-center py-0 px-5 box-border gap-[64px] text-left text-base text-black font-rubik">
            <div className="flex-1 relative capitalize font-light">
              enter your email address
            </div>
            <div className="rounded-xl bg-darkorange-900 flex flex-row items-center justify-center py-[11.5px] px-6 text-sm text-grayscale-white">
              <b className="relative capitalize">subscribe</b>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2338px] left-[0px] w-[1440px] h-[263px] text-black font-pacifico">
        <div
          className="absolute top-[0px] left-[64px] w-[157px] h-12 cursor-pointer"
          onClick={onLogoContainerClick}
        >
          <div
            className="absolute top-[0px] left-[0px] w-[157px] h-12 cursor-pointer"
            onClick={onLogoContainerClick}
          >
            <div className="absolute top-[0px] left-[36px] w-8 h-[22px]" />
            <div className="absolute top-[12px] left-[0px] w-[157px] h-9">
              <div className="absolute top-[4px] left-[35px] capitalize">
                Harrow Bakery
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-9 h-9 object-cover"
                alt=""
                src="/pdf-candy--png@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[1440px] h-[263px] text-base font-quicksand">
          <div className="absolute top-[38px] left-[261px] capitalize inline-block w-[125.3px]">
            <p className="[margin-block-start:0] [margin-block-end:8px]">{`universal cake `}</p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              candy
            </p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              confectionery
            </p>
            <p className="m-0">gifts</p>
          </div>
          <b className="absolute top-[0px] left-[261px] text-xl capitalize inline-block w-[125.3px]">
            product
          </b>
          <div className="absolute top-[42px] left-[703px] capitalize inline-block w-[125.3px]">
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              condition
            </p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              open a shop
            </p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">{`licensing & terms`}</p>
            <p className="m-0">technology</p>
          </div>
          <b className="absolute top-[4px] left-[703px] text-xl capitalize inline-block w-[125.3px]">
            company
          </b>
          <div className="absolute top-[40px] left-[482px] capitalize inline-block w-[125.3px]">
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              our mission
            </p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              our story
            </p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              our culture
            </p>
            <p className="m-0">team</p>
          </div>
          <b className="absolute top-[2px] left-[482px] text-xl capitalize inline-block w-[125.3px]">
            about
          </b>
          <div className="absolute top-[41px] left-[926px] capitalize inline-block w-[125.3px]">
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              getting started
            </p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              help center
            </p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              suggest a feature
            </p>
            <p className="m-0">report a bug</p>
          </div>
          <b className="absolute top-[3px] left-[926px] text-xl capitalize inline-block w-[125.3px]">
            support
          </b>
          <img
            className="absolute top-[193px] left-[68px] max-h-full w-[1304.5px]"
            alt=""
            src="/vector-12.svg"
          />
          <div className="absolute top-[82px] left-[1147px] rounded-xl bg-darkorange-600 w-[152px] h-[42px] flex flex-row items-center justify-center py-2 px-6 box-border text-3xl text-grayscale-white font-rubik">
            <b className="relative capitalize">follow us</b>
          </div>
          <div className="absolute top-[193px] left-[0px] w-[1440px] h-[70px] flex flex-row items-center justify-center py-0 pr-[88px] pl-8 box-border gap-[34px] text-center">
            <div className="flex-1 flex flex-row items-center justify-center p-2.5 gap-[10px]">
              <img
                className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/copyright.svg"
              />
              <div className="relative tracking-[0.05em] capitalize font-light">
                Copyright © 2024 Prabisha Consulting Limited. All Rights
                Reserved
              </div>
            </div>
            <div className="hidden flex-row items-center justify-center gap-[18px]">
              <img
                className="w-[18px] relative h-[18px]"
                alt=""
                src="/vector.svg"
              />
              <img
                className="w-[13.5px] relative h-[13.5px]"
                alt=""
                src="/vector1.svg"
              />
              <img
                className="w-[13.5px] relative h-[13.5px]"
                alt=""
                src="/vector2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[calc(50%_-_720px)] bg-darkorange-1000 w-[1440px] h-[92px] flex flex-row items-center justify-center py-[25px] px-[66px] box-border gap-[104px] text-sm font-segoe-ui">
        <div className="w-[498px] hidden flex-row items-center justify-start gap-[10px]">
          <div className="w-[115px] rounded-3xs h-11 flex flex-row items-baseline justify-start gap-[247px]">
            <img
              className="w-9 relative rounded-2xl h-9 object-cover hidden"
              alt=""
              src="/pdf-candy--png2@2x.png"
            />
            <div className="flex-1 h-11 flex flex-col items-start justify-center gap-[1px]">
              <b className="w-[71px] relative capitalize hidden">phlox</b>
              <div className="w-[162px] relative text-5xl capitalize font-pacifico hidden">
                Harrow Bakery
              </div>
            </div>
          </div>
          <div className="w-[504px] flex flex-row items-center justify-center gap-[10px] text-lg font-quicksand">
            <div className="flex-1 h-[47px] flex flex-row items-center justify-center p-2.5 box-border">
              <img
                className="w-0 relative h-[27px] hidden"
                alt=""
                src="/vector-4.svg"
              />
            </div>
            <div className="flex-1 flex flex-row items-center justify-center p-2.5">
              <b className="relative [text-decoration:underline] capitalize">
                home
              </b>
            </div>
            <div className="flex-1 flex flex-row items-center justify-center p-2.5">
              <b
                className="relative capitalize cursor-pointer"
                onClick={onAboutTextClick}
              >
                about
              </b>
            </div>
            <div className="flex-1 flex flex-row items-center justify-center p-2.5">
              <b className="relative capitalize">shop</b>
            </div>
            <div
              className="flex-1 flex flex-row items-center justify-center p-2.5 cursor-pointer"
              onClick={onFrameContainerClick}
            >
              <b className="relative capitalize">blog</b>
            </div>
            <div
              className="flex-1 flex flex-row items-center justify-center p-2.5 cursor-pointer"
              onClick={onFrameContainerClick1}
            >
              <b className="relative capitalize">contact</b>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-end gap-[22px] font-rubik">
          <div
            className="rounded-7xl bg-sandybrown flex flex-row items-center justify-center py-2.5 px-[26px] gap-[15px] cursor-pointer"
            onClick={onSearchContainerClick}
          >
            <b className="relative capitalize">Login</b>
            <img
              className="w-6 relative rounded-3xs h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/search.svg"
            />
          </div>
          <div
            className="rounded-7xl bg-darkorange-300 flex flex-row items-center justify-center py-2.5 px-[26px] gap-[15px] cursor-pointer"
            onClick={onBasketContainerClick}
          >
            <b className="relative capitalize">basket (0)</b>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/shopping-cart.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[4px] left-[14px] text-13xl capitalize font-pacifico inline-block w-[253px] h-[57px]">
        Harrow bakery
      </div>
      <b className="absolute top-[35px] left-[417px] capitalize inline-block w-16 h-5">
        Home
      </b>
      <b className="absolute top-[35px] left-[511px] capitalize inline-block w-16 h-[21px]">
        About
      </b>
      <b className="absolute top-[35px] left-[614px] capitalize inline-block w-[49px] h-5">
        Shop
      </b>
      <b className="absolute top-[33px] left-[702px] capitalize inline-block w-[46px] h-[19px]">
        Blog
      </b>
      <b className="absolute top-[35px] left-[778px] capitalize inline-block w-[78px] h-6">
        Contact
      </b>
      <div
        className="absolute top-[0px] left-[calc(50%_-_720px)] bg-darkorange-1000 w-[1440px] h-[92px] flex flex-row items-center justify-center py-[25px] px-[66px] box-border gap-[104px] text-sm font-segoe-ui"
        data-scroll-to="headerContainer"
      >
        <div className="w-[498px] hidden flex-row items-center justify-start gap-[10px]">
          <div className="w-[115px] rounded-3xs h-11 flex flex-row items-baseline justify-start gap-[247px]">
            <img
              className="w-9 relative rounded-2xl h-9 object-cover hidden"
              alt=""
              src="/pdf-candy--png2@2x.png"
            />
            <div className="flex-1 h-11 flex flex-col items-start justify-center gap-[1px]">
              <b className="w-[71px] relative capitalize hidden">phlox</b>
              <div className="w-[162px] relative text-5xl capitalize font-pacifico hidden">
                Harrow Bakery
              </div>
            </div>
          </div>
          <div className="w-[504px] flex flex-row items-center justify-center gap-[10px] text-lg font-quicksand">
            <div className="flex-1 h-[47px] flex flex-row items-center justify-center p-2.5 box-border">
              <img
                className="w-0 relative h-[27px] hidden"
                alt=""
                src="/vector-4.svg"
              />
            </div>
            <div className="flex-1 flex flex-row items-center justify-center p-2.5">
              <b className="relative [text-decoration:underline] capitalize">
                home
              </b>
            </div>
            <div className="flex-1 flex flex-row items-center justify-center p-2.5">
              <b
                className="relative capitalize cursor-pointer"
                onClick={onAboutTextClick}
              >
                about
              </b>
            </div>
            <div className="flex-1 flex flex-row items-center justify-center p-2.5">
              <b className="relative capitalize">shop</b>
            </div>
            <div
              className="flex-1 flex flex-row items-center justify-center p-2.5 cursor-pointer"
              onClick={onFrameContainerClick}
            >
              <b className="relative capitalize">blog</b>
            </div>
            <div
              className="flex-1 flex flex-row items-center justify-center p-2.5 cursor-pointer"
              onClick={onFrameContainerClick1}
            >
              <b className="relative capitalize">contact</b>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-end gap-[22px] font-rubik">
          <div
            className="rounded-7xl bg-sandybrown flex flex-row items-center justify-center py-2.5 px-[26px] gap-[15px] cursor-pointer"
            onClick={onSearchContainerClick}
          >
            <b
              className="relative capitalize cursor-pointer"
              onClick={onSearchContainerClick}
            >
              Login
            </b>
            <img
              className="w-6 relative rounded-3xs h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/search.svg"
            />
          </div>
          <div
            className="rounded-7xl bg-darkorange-300 flex flex-row items-center justify-center py-2.5 px-[26px] gap-[15px] cursor-pointer"
            onClick={onBasketContainerClick}
          >
            <b className="relative capitalize">basket (0)</b>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/shopping-cart.svg"
            />
          </div>
        </div>
      </div>
      <div
        className="absolute top-[4px] left-[14px] text-13xl capitalize font-pacifico inline-block w-[253px] h-[57px] cursor-pointer"
        onClick={onLogoContainerClick}
      >
        Harrow bakery
      </div>
      <b
        className="absolute top-[35px] left-[417px] capitalize inline-block w-16 h-5 cursor-pointer"
        onClick={onLogoContainerClick}
      >
        Home
      </b>
      <b
        className="absolute top-[35px] left-[511px] capitalize inline-block w-16 h-[21px] cursor-pointer"
        onClick={onAboutTextClick1}
      >
        About
      </b>
      <b
        className="absolute top-[35px] left-[614px] capitalize inline-block w-[49px] h-5 cursor-pointer"
        onClick={onShopTextClick}
      >
        Shop
      </b>
      <b
        className="absolute top-[33px] left-[702px] capitalize inline-block w-[46px] h-[19px] cursor-pointer"
        onClick={onFrameContainerClick}
      >
        Blog
      </b>
      <b
        className="absolute top-[35px] left-[778px] capitalize inline-block w-[78px] h-6 cursor-pointer"
        onClick={onFrameContainerClick1}
      >
        Contact
      </b>
    </div>
  );
};

export default ABOUT;
