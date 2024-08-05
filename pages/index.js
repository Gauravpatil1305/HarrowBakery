import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const HOME = () => {
  const router = useRouter();

  const onButtonContainerClick = useCallback(() => {
    router.push("/s-h-o-p");
  }, [router]);

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
    router.push("/a-b-o-u-t");
  }, [router]);

  const onSocialmediaContainerClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/b-l-o-g");
  }, [router]);

  const onFrameContainerClick1 = useCallback(() => {
    router.push("/c-o-n-t-a-c-t-u-s");
  }, [router]);

  const onBasketContainerClick = useCallback(() => {
    router.push("/cart");
  }, [router]);

  return (
    <div className="w-full relative bg-grayscale-white h-[5873px] overflow-hidden text-center text-lg text-grayscale-white font-quicksand">
      <img
        className="absolute top-[106px] left-[0px] w-[1440px] h-[1907px] hidden"
        alt=""
        src="/bg.svg"
      />
      <div className="absolute top-[92px] left-[0px] rounded-3xs w-[1440px] h-[780px] flex flex-col items-center justify-center gap-[10px] text-left text-[62px]">
        <img
          className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[974px] shrink-0 object-cover z-[0]"
          alt=""
          src="/rectangle-19@2x.png"
        />
        <b className="w-[314px] absolute !m-[0] top-[193px] left-[1087px] leading-[94px] capitalize inline-block text-right z-[1]">
          <p className="[margin-block-start:0] [margin-block-end:6px]">
            make your
          </p>
          <p className="[margin-block-start:0] [margin-block-end:6px]">
            baking
          </p>
          <p className="[margin-block-start:0] [margin-block-end:6px]">
            better
          </p>
          <p className="m-0">tasting</p>
        </b>
        <div className="w-[270px] absolute !m-[0] top-[91px] left-[1131px] text-29xl leading-[76px] capitalize font-pacifico text-chocolate-300 inline-block z-[2]">
          confectionery
        </div>
        <div className="!m-[0] absolute top-[659px] left-[916px] flex flex-col items-start justify-start z-[3] text-lg text-black">
          <div className="rounded-8xs bg-gray-300 flex flex-col items-center justify-center p-2.5 gap-[34px]">
            <div className="w-[400px] flex flex-row items-center justify-center gap-[23px]">
              <img
                className="w-[114px] relative rounded-8xs h-[84px] object-cover"
                alt=""
                src="/unsplash4mh3ajljekq@2x.png"
              />
              <div className="flex-1 flex flex-col items-center justify-start gap-[14px]">
                <div className="self-stretch relative capitalize font-semibold">
                  chocolate cookie
                </div>
                <div className="self-stretch relative text-base capitalize">
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[22px] text-sm text-grayscale-white">
              <div
                className="rounded-xl bg-chocolate-200 flex flex-row items-center justify-center py-[11.5px] px-6 cursor-pointer"
                onClick={onButtonContainerClick}
              >
                <div className="relative capitalize font-semibold">
                  shop now
                </div>
              </div>
              <div className="rounded-xl bg-black flex flex-row items-center justify-center py-[11.5px] px-6">
                <div className="relative capitalize font-semibold">
                  custom order
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1064px] left-[533px] flex flex-col items-start justify-start text-16xl text-darkorange-200 font-pacifico">
        <div className="w-[375px] flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[52.5px] capitalize">
            which one
          </div>
        </div>
        <div className="w-[375px] flex flex-row items-center justify-center text-21xl text-black font-quicksand">
          <b className="flex-1 relative tracking-[-1.2px] leading-[72px] capitalize">
            shop by category
          </b>
        </div>
      </div>
      <div className="absolute top-[1064px] left-[533px] flex flex-col items-start justify-start text-16xl text-darkorange-200 font-pacifico">
        <div className="w-[375px] flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[52.5px] capitalize">
            which one
          </div>
        </div>
        <div className="w-[375px] flex flex-row items-center justify-center text-21xl text-black font-quicksand">
          <b className="flex-1 relative tracking-[-1.2px] leading-[72px] capitalize">
            shop by category
          </b>
        </div>
      </div>
      <div
        className="absolute top-[1244px] left-[101px] w-[477px] h-[285px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-5xl font-pacifico"
        data-animate-on-scroll
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-31@2x.png"
        />
        <div className="absolute w-[51.99%] top-[calc(50%_-_103.5px)] right-[34.17%] left-[13.84%] flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-center gap-[26px]">
            <div className="w-[248px] flex flex-col items-start justify-start gap-[14px]">
              <div className="self-stretch flex flex-col items-start justify-center gap-[2px]">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative capitalize">coffe</div>
                </div>
                <div className="flex flex-row items-center justify-center text-16xl font-quicksand">
                  <div className="relative capitalize font-semibold">
                    local donuts
                  </div>
                </div>
              </div>
              <div className="self-stretch relative text-base leading-[22px] capitalize font-medium font-quicksand text-left">
                The quick, brown fox jumps over a lazy dog. DJs flock by when
              </div>
            </div>
            <div
              className="rounded-xl bg-darkorange-500 flex flex-row items-center justify-center py-[11.5px] px-6 cursor-pointer text-left text-sm font-rubik"
              onClick={onButtonContainerClick}
            >
              <div className="relative capitalize">browse shop</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[1244px] left-[624px] rounded-3xs flex flex-col items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        data-animate-on-scroll
      >
        <img
          className="w-[337px] relative rounded-3xs h-[285px] object-cover"
          alt=""
          src="/rectangle-34@2x.png"
        />
      </div>
      <div
        className="absolute top-[1560px] left-[101px] rounded-3xs flex flex-col items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        data-animate-on-scroll
      >
        <img
          className="w-[337px] relative rounded-3xs h-[285px] object-cover"
          alt=""
          src="/rectangle-341@2x.png"
        />
      </div>
      <div
        className="absolute top-[1560px] left-[484px] rounded-3xs flex flex-col items-center justify-center gap-[10px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-11xl text-darkorange-600 font-pacifico"
        data-animate-on-scroll
      >
        <img
          className="w-[477px] relative rounded-3xs h-[285px] object-cover z-[0]"
          alt=""
          src="/rectangle-32@2x.png"
        />
        <div className="!m-[0] absolute top-[31px] left-[37px] flex flex-col items-start justify-start z-[1]">
          <div className="flex flex-col items-start justify-center gap-[26px]">
            <div className="w-[248px] flex flex-col items-start justify-start gap-[14px]">
              <div className="self-stretch flex flex-col items-start justify-center gap-[2px]">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative capitalize">which one</div>
                </div>
                <div className="flex flex-row items-center justify-center text-16xl text-grayscale-white font-quicksand">
                  <div className="relative capitalize font-semibold">
                    choco cherry
                  </div>
                </div>
              </div>
              <div className="self-stretch relative text-base leading-[22px] capitalize font-light font-roboto text-grayscale-white text-left">
                The quick, brown fox jumps over a lazy dog. DJs flock by when
              </div>
            </div>
            <div
              className="rounded-xl bg-darkorange-500 flex flex-row items-center justify-center py-[11.5px] px-6 cursor-pointer text-left text-sm text-grayscale-white font-rubik"
              onClick={onButtonContainerClick}
            >
              <div className="relative capitalize">browse shop</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1912px] left-[492px] flex flex-col items-center justify-center text-16xl text-darkorange-200 font-pacifico">
        <div className="w-[457px] relative leading-[52.5px] capitalize flex items-center justify-center">
          best seller
        </div>
        <b className="w-[457px] relative text-21xl tracking-[-1.2px] leading-[72px] capitalize flex font-quicksand text-black items-center justify-center">
          best seller this week!
        </b>
      </div>
      <div className="absolute top-[2100px] left-[62px] bg-gainsboro-200 w-[1312px] h-[720px] hidden" />
      <div
        className="absolute top-[1238px] left-[1007px] rounded-3xs flex flex-row items-center justify-center gap-[10px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-11xl font-pacifico"
        data-animate-on-scroll
      >
        <img
          className="w-[331px] relative rounded-3xs h-[607px] object-cover z-[0]"
          alt=""
          src="/rectangle-311@2x.png"
        />
        <div className="!m-[0] absolute top-[14px] left-[31px] flex flex-col items-center justify-center z-[1]">
          <div className="flex flex-col items-start justify-center gap-[26px]">
            <div className="w-[248px] flex flex-col items-start justify-start gap-[14px]">
              <div className="self-stretch flex flex-col items-start justify-center gap-[2px]">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative capitalize">breakfast</div>
                </div>
                <div className="flex flex-row items-center justify-center text-left text-16xl font-quicksand">
                  <b className="w-[219px] relative capitalize inline-block shrink-0">
                    <p className="m-0">chocolate</p>
                    <p className="m-0">cake</p>
                  </b>
                </div>
              </div>
              <div className="self-stretch relative text-base leading-[22px] capitalize font-medium font-quicksand text-left">
                The quick, brown fox jumps over a lazy dog. DJs flock by when
              </div>
            </div>
            <div
              className="rounded-xl bg-darkorange-500 flex flex-row items-center justify-center py-[11.5px] px-6 cursor-pointer text-left text-sm font-rubik"
              onClick={onButtonContainerClick}
            >
              <div className="relative capitalize">browse shop</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[2854px] left-[67px] w-[1309px] h-[687px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-26xl font-pacifico"
        data-animate-on-scroll
      >
        <img
          className="absolute h-full w-[58.32%] top-[0%] right-[0%] bottom-[0%] left-[41.68%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/unsplashytbfht9-ihy@2x.png"
        />
        <img
          className="absolute h-full w-[40.15%] top-[0%] right-[59.85%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/unsplashw0-w3n-hg00@2x.png"
        />
        <div className="absolute h-[52.11%] w-[18.95%] top-[18.92%] right-[78.31%] bottom-[28.97%] left-[2.74%] flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-center gap-[26px]">
            <div className="w-[248px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-center gap-[2px]">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative capitalize">cup cakes</div>
                </div>
                <div className="flex flex-row items-center justify-center text-16xl font-quicksand">
                  <div className="relative capitalize font-semibold" />
                </div>
              </div>
              <div className="self-stretch relative leading-[47px] capitalize text-left mt-[-22px] font-quicksand">
                <p className="m-0">{`Unique `}</p>
                <p className="m-0 font-semibold">Sweets</p>
                <p className="m-0">
                  <b>For</b>
                </p>
                <p className="m-0 font-medium">Lovers</p>
              </div>
            </div>
            <div
              className="rounded-xl bg-darkorange-500 flex flex-row items-center justify-center py-[11.5px] px-6 cursor-pointer text-left text-sm font-quicksand"
              onClick={onButtonContainerClick}
            >
              <b
                className="relative capitalize cursor-pointer"
                onClick={onButtonContainerClick}
              >
                Shop now
              </b>
            </div>
          </div>
        </div>
        <div className="absolute h-[46.87%] w-[28.47%] top-[23.73%] right-[26.94%] bottom-[29.4%] left-[44.58%] flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-center gap-[26px]">
            <div className="w-[248px] flex flex-col items-start justify-start gap-[14px]">
              <div className="self-stretch flex flex-col items-start justify-center gap-[2px]">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative capitalize">Shop Confecrionery</div>
                </div>
                <div className="flex flex-row items-center justify-center text-left font-quicksand">
                  <div className="relative capitalize">
                    <p className="m-0">
                      <span className="font-semibold font-quicksand">{`Raspberry `}</span>
                      <span className="font-medium font-quicksand">French</span>
                      <span className="font-semibold">{` `}</span>
                    </p>
                    <p className="m-0 font-semibold">Macaron Cake</p>
                  </div>
                </div>
              </div>
              <div className="self-stretch relative text-base leading-[24px] capitalize font-medium font-quicksand text-left">
                The quick, brown fox jumps over a lazy dog.
              </div>
            </div>
            <div
              className="rounded-xl bg-darkorange-500 flex flex-row items-center justify-center py-[11.5px] px-6 cursor-pointer text-left text-sm font-quicksand"
              onClick={onButtonContainerClick}
            >
              <b
                className="relative capitalize cursor-pointer"
                onClick={onButtonContainerClick}
              >
                shop now
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[4334px] left-[508px] w-[424px] flex flex-col items-center justify-center text-16xl text-darkorange-200 font-pacifico">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[52.5px] capitalize">
            which one
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center text-21xl text-black font-quicksand">
          <b className="flex-1 relative tracking-[-1.2px] leading-[72px] capitalize">
            shop by category
          </b>
        </div>
      </div>
      <div
        className="absolute top-[4519px] left-[61px] rounded-3xs flex flex-row items-center justify-center gap-[10px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-black"
        data-animate-on-scroll
      >
        <img
          className="w-[400px] relative rounded-3xs h-[400px] object-cover z-[0]"
          alt=""
          src="/rectangle-9@2x.png"
        />
        <div className="!m-[0] absolute top-[calc(50%_-_54px)] left-[56px] rounded-3xs bg-grayscale-white flex flex-col items-center justify-center p-2.5 gap-[14px] z-[1]">
          <b className="relative [text-decoration:underline] capitalize">
            march 2023
          </b>
          <div className="relative text-xl lowercase">
            <p className="m-0">interior inspiration</p>
            <p className="m-0">hidden to in the middle of....</p>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[4520px] left-[518px] rounded-3xs flex flex-row items-center justify-center gap-[10px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-black"
        data-animate-on-scroll
      >
        <img
          className="w-[400px] relative rounded-3xs h-[400px] object-cover z-[0]"
          alt=""
          src="/rectangle-91@2x.png"
        />
        <div className="!m-[0] absolute top-[calc(50%_-_54px)] left-[56px] rounded-3xs bg-grayscale-white flex flex-col items-center justify-center p-2.5 gap-[14px] z-[1]">
          <b className="relative [text-decoration:underline] capitalize">
            march 2023
          </b>
          <div className="relative text-xl lowercase">
            <p className="m-0">interior inspiration</p>
            <p className="m-0">hidden to in the middle of....</p>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[4520px] left-[976px] rounded-3xs flex flex-row items-center justify-center gap-[10px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-black"
        data-animate-on-scroll
      >
        <img
          className="w-[400px] relative rounded-3xs h-[400px] object-cover z-[0]"
          alt=""
          src="/rectangle-92@2x.png"
        />
        <div className="!m-[0] absolute top-[calc(50%_-_54px)] left-[56px] rounded-3xs bg-grayscale-white flex flex-col items-center justify-center p-2.5 gap-[14px] z-[1]">
          <b className="relative [text-decoration:underline] capitalize">
            march 2023
          </b>
          <div className="relative text-xl lowercase">
            <p className="m-0">interior inspiration</p>
            <p className="m-0">hidden to in the middle of....</p>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[4984px] left-[68px] flex flex-col items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-16xl text-darkorange-600 font-pacifico"
        data-animate-on-scroll
      >
        <div className="w-[1304px] rounded-3xs h-[560px] flex flex-col items-center justify-center py-6 px-5 box-border gap-[26px] bg-[url('/text2@3x.png')] bg-cover bg-no-repeat bg-[top]">
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
      <div className="absolute top-[5609px] left-[64px] bg-gainsboro-200 w-[1312px] h-[265px] hidden" />
      <div className="absolute top-[5607px] left-[0px] w-[1440px] h-[263px] text-left text-black font-pacifico">
        <div
          className="absolute top-[0px] left-[32px] w-[161px] h-[52px] cursor-pointer"
          onClick={onLogoContainerClick}
        >
          <div className="absolute top-[0px] left-[0px] w-[161px] h-[52px]">
            <div className="absolute top-[0px] left-[68px] w-8 h-[22px]" />
            <div className="absolute top-[16px] left-[0px] w-[161px] h-9">
              <div className="absolute top-[1px] left-[39px] capitalize">
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
          <div
            className="absolute top-[82px] left-[1147px] rounded-xl bg-darkorange-600 w-[152px] h-[42px] flex flex-row items-center justify-center py-2 px-6 box-border cursor-pointer text-3xl text-grayscale-white font-rubik"
            onClick={onSocialmediaContainerClick}
          >
            <b className="relative capitalize">follow us</b>
          </div>
          <div className="absolute top-[193px] left-[0px] w-[1440px] h-[70px] flex flex-row items-center justify-center py-0 pr-[88px] pl-8 box-border gap-[34px] text-center">
            <div className="flex-1 flex flex-row items-center justify-center p-2.5 gap-[10px]">
              <img
                className="w-[18px] relative h-[18px] overflow-hidden shrink-0 hidden"
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
      <div className="absolute top-[3636px] left-[433px] w-[574px] flex flex-col items-center justify-center text-16xl text-darkorange-200 font-pacifico">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[52.5px] capitalize">
            Testimonial
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center text-21xl text-black font-quicksand">
          <b className="flex-1 relative tracking-[-1.2px] capitalize">
            We Care About Our Customers Experience Too
          </b>
        </div>
      </div>
      <img
        className="absolute top-[3180px] left-[866px] w-24 h-24 overflow-hidden"
        alt=""
        src
      />
      <img
        className="absolute top-[3180px] left-[962px] w-24 h-24 overflow-hidden"
        alt=""
        src
      />
      <img
        className="absolute top-[3686px] left-[3px] w-[1438px] h-[79.6px] hidden"
        alt=""
        src="/group-4.svg"
      />
      <img
        className="absolute top-[1056px] left-[0px] w-[1438px] h-[79.6px] hidden"
        alt=""
        src="/group-5.svg"
      />
      <img
        className="absolute top-[4326px] left-[3px] w-[1438px] h-[79.6px] object-contain hidden"
        alt=""
        src="/group-6@2x.png"
      />
      <div className="absolute top-[1084px] left-[1386px] flex flex-row items-center justify-center p-2.5">
        <div className="overflow-hidden flex flex-row items-start justify-start py-0.5 px-[5px]">
          <img className="w-2.5 relative h-4" alt="" src="/vector3.svg" />
        </div>
      </div>
      <div className="absolute top-[-1px] left-[calc(50%_-_720px)] bg-darkorange-1000 w-[1440px] h-[93px] flex flex-row items-center justify-center py-[25px] px-[66px] box-border gap-[104px] text-left text-sm font-segoe-ui">
        <div className="w-[498px] hidden flex-row items-center justify-start gap-[10px]">
          <div className="w-[115px] rounded-3xs h-11 flex flex-row items-baseline justify-start gap-[247px]">
            <img
              className="w-9 relative rounded-2xl h-9 object-cover hidden"
              alt=""
              src="/pdf-candy--png1@2x.png"
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
                onClick={onLogoContainerClick}
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
            onClick={onSocialmediaContainerClick}
          >
            <b className="relative capitalize">Logine</b>
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
        className="absolute top-[2466px] left-[69px] rounded-3xs bg-chocolate-100 flex flex-col items-center justify-center pt-0 px-0 pb-[22px] gap-[22px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-5xl"
        data-animate-on-scroll
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover"
          alt=""
          src="/rectangle-30@2x.png"
        />
        <div className="relative capitalize font-semibold">
          chocolate lollipop
        </div>
      </div>
      <div
        className="absolute top-[2466px] left-[571px] rounded-3xs bg-chocolate-100 flex flex-col items-center justify-center pt-0 px-0 pb-[22px] gap-[22px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-5xl"
        data-animate-on-scroll
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover"
          alt=""
          src="/rectangle-301@2x.png"
        />
        <div className="relative capitalize font-semibold">
          chocolate cookie
        </div>
      </div>
      <div
        className="absolute top-[2467px] left-[1073px] rounded-3xs bg-chocolate-100 flex flex-col items-center justify-center pt-0 px-0 pb-[22px] gap-[22px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-5xl"
        data-animate-on-scroll
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover"
          alt=""
          src="/rectangle-302@2x.png"
        />
        <div className="relative capitalize font-semibold">muffin's</div>
      </div>
      <div
        className="absolute top-[2100px] left-[69px] rounded-3xs bg-chocolate-100 flex flex-col items-center justify-center pt-0 px-0 pb-[22px] gap-[22px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-5xl"
        data-animate-on-scroll
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover"
          alt=""
          src="/rectangle-303@2x.png"
        />
        <div className="relative capitalize font-semibold">caramel donut</div>
      </div>
      <div
        className="absolute top-[2100px] left-[569px] rounded-3xs bg-chocolate-100 flex flex-col items-center justify-center pt-0 px-0 pb-[22px] gap-[22px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-5xl"
        data-animate-on-scroll
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover"
          alt=""
          src="/rectangle-30@2x.png"
        />
        <div className="relative capitalize font-semibold">
          chocolate lollipop
        </div>
      </div>
      <div
        className="absolute top-[2100px] left-[1069px] rounded-3xs bg-chocolate-100 flex flex-col items-center justify-center pt-0 px-0 pb-[22px] gap-[22px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-5xl"
        data-animate-on-scroll
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover"
          alt=""
          src="/rectangle-304@2x.png"
        />
        <div className="relative capitalize font-semibold">
          whole wheat bread
        </div>
      </div>
      <div className="absolute top-[3896px] left-[calc(50%_-_668px)] w-[1332px] h-[372px] text-xl text-black font-roboto">
        <div className="absolute top-[0px] left-[0px] w-[182px] h-[372px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-grayscale-white overflow-hidden">
            <div className="absolute top-[70px] left-[0px] rounded-xl bg-gray-300 w-[183px] flex flex-col items-center justify-center p-[45px] box-border gap-[21px]">
              <div className="w-[123px] flex flex-col items-center justify-start gap-[17px]">
                <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
                  <div className="self-stretch relative capitalize font-semibold">
                    bruce hardy
                  </div>
                  <div className="w-[123px] relative text-lg capitalize hidden" />
                </div>
                <div className="self-stretch relative text-base capitalize font-light">
                  When, while lovely valley teems with vapour around meand
                  meridian sun strikes
                </div>
              </div>
              <img className="w-[90px] relative h-3.5" alt="" src="/star.svg" />
            </div>
            <img
              className="absolute top-[0px] left-[49px] rounded-[50%] w-[85px] h-[85px] object-cover"
              alt=""
              src="/ellipse-8@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[230px] w-[183px] h-[372px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-grayscale-white overflow-hidden">
            <div className="absolute top-[70px] left-[0px] rounded-xl bg-gray-300 w-[183px] flex flex-col items-center justify-center p-[45px] box-border gap-[21px]">
              <div className="w-[123px] flex flex-col items-center justify-start gap-[17px]">
                <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
                  <div className="self-stretch relative capitalize font-semibold">
                    kae
                  </div>
                  <div className="w-[123px] relative text-lg capitalize hidden">
                    google inc.
                  </div>
                </div>
                <div className="self-stretch relative text-base capitalize font-light">
                  When, while lovely valley teems with vapour around meand
                  meridian sun strikes
                </div>
              </div>
              <img className="w-[90px] relative h-3.5" alt="" src="/star.svg" />
            </div>
            <img
              className="absolute top-[0px] left-[49px] rounded-[50%] w-[85px] h-[85px] object-cover"
              alt=""
              src="/ellipse-81@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[460px] w-[183px] h-[372px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-grayscale-white overflow-hidden">
            <div className="absolute top-[70px] left-[0px] rounded-xl bg-gray-300 w-[183px] flex flex-col items-center justify-center p-[45px] box-border gap-[21px]">
              <div className="w-[123px] flex flex-col items-center justify-start gap-[17px]">
                <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
                  <div className="self-stretch relative capitalize font-semibold">
                    alice
                  </div>
                  <div className="w-[123px] relative text-lg capitalize hidden">
                    apple inc.
                  </div>
                </div>
                <div className="self-stretch relative text-base capitalize font-light">
                  When, while lovely valley teems with vapour around meand
                  meridian sun strikes
                </div>
              </div>
              <img className="w-[90px] relative h-3.5" alt="" src="/star.svg" />
            </div>
            <img
              className="absolute top-[0px] left-[49px] rounded-[50%] w-[85px] h-[85px] object-cover"
              alt=""
              src="/ellipse-82@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[690px] w-[183px] h-[372px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-grayscale-white overflow-hidden">
            <div className="absolute top-[70px] left-[0px] rounded-xl bg-gray-300 w-[183px] flex flex-col items-center justify-center p-[45px] box-border gap-[21px]">
              <div className="w-[123px] flex flex-col items-center justify-start gap-[17px]">
                <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
                  <div className="self-stretch relative capitalize font-semibold">
                    hardy
                  </div>
                  <div className="w-[123px] relative text-lg capitalize hidden">
                    vivo inc.
                  </div>
                </div>
                <div className="self-stretch relative text-base capitalize font-light">
                  When, while lovely valley teems with vapour around meand
                  meridian sun strikes
                </div>
              </div>
              <img className="w-[90px] relative h-3.5" alt="" src="/star.svg" />
            </div>
            <img
              className="absolute top-[0px] left-[49px] rounded-[50%] w-[85px] h-[85px] object-cover"
              alt=""
              src="/ellipse-83@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[920px] w-[183px] h-[372px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-grayscale-white overflow-hidden">
            <div className="absolute top-[70px] left-[0px] rounded-xl bg-gray-300 w-[183px] flex flex-col items-center justify-center p-[45px] box-border gap-[21px]">
              <div className="w-[123px] flex flex-col items-center justify-start gap-[17px]">
                <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
                  <div className="self-stretch relative capitalize font-semibold">
                    {" "}
                    hardy
                  </div>
                  <div className="self-stretch relative text-lg capitalize">
                    paypal inc.
                  </div>
                </div>
                <div className="self-stretch relative text-base capitalize font-light">
                  When, while lovely valley teems with vapour around meand
                  meridian sun strikes
                </div>
              </div>
              <img className="w-[90px] relative h-3.5" alt="" src="/star.svg" />
            </div>
            <img
              className="absolute top-[0px] left-[49px] rounded-[50%] w-[85px] h-[85px] object-cover"
              alt=""
              src="/ellipse-84@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[1150px] w-[183px] h-[372px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-grayscale-white overflow-hidden">
            <div className="absolute top-[70px] left-[0px] rounded-xl bg-gray-300 w-[183px] flex flex-col items-center justify-center p-[45px] box-border gap-[21px]">
              <div className="w-[123px] flex flex-col items-center justify-start gap-[17px]">
                <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
                  <div className="self-stretch relative capitalize font-semibold">
                    sakura
                  </div>
                  <div className="self-stretch relative text-lg capitalize">
                    jutsu inc.
                  </div>
                </div>
                <div className="self-stretch relative text-base capitalize font-light">
                  When, while lovely valley teems with vapour around meand
                  meridian sun strikes
                </div>
              </div>
              <img className="w-[90px] relative h-3.5" alt="" src="/star.svg" />
            </div>
            <img
              className="absolute top-[0px] left-[49px] rounded-[50%] w-[85px] h-[85px] object-cover"
              alt=""
              src="/ellipse-85@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[3px] left-[14px] text-13xl capitalize font-pacifico text-left inline-block w-[253px] h-[58px]">
        Harrow bakery
      </div>
      <b className="absolute top-[34px] left-[417px] capitalize inline-block text-left w-16 h-[21px]">
        Home
      </b>
      <b className="absolute top-[34px] left-[511px] capitalize inline-block text-left w-16 h-[22px]">
        About
      </b>
      <b className="absolute top-[34px] left-[614px] capitalize inline-block text-left w-[49px] h-[21px]">
        Shop
      </b>
      <b className="absolute top-[32px] left-[702px] capitalize inline-block text-left w-[46px] h-5">
        Blog
      </b>
      <b className="absolute top-[34px] left-[778px] capitalize inline-block text-left w-[78px] h-[25px]">
        Contact
      </b>
      <div className="absolute top-[-1px] left-[calc(50%_-_720px)] bg-darkorange-1000 w-[1440px] h-[93px] flex flex-row items-center justify-center py-[25px] px-[66px] box-border gap-[104px] text-left text-sm font-segoe-ui">
        <div className="w-[498px] hidden flex-row items-center justify-start gap-[10px]">
          <div className="w-[115px] rounded-3xs h-11 flex flex-row items-baseline justify-start gap-[247px]">
            <img
              className="w-9 relative rounded-2xl h-9 object-cover hidden"
              alt=""
              src="/pdf-candy--png1@2x.png"
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
                onClick={onLogoContainerClick}
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
            onClick={onSocialmediaContainerClick}
          >
            <b className="relative capitalize">Logine</b>
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
      <div className="absolute top-[3px] left-[14px] text-13xl capitalize font-pacifico text-left inline-block w-[253px] h-[58px]">
        Harrow bakery
      </div>
      <b className="absolute top-[34px] left-[417px] capitalize inline-block text-left w-16 h-[21px]">
        Home
      </b>
      <b
        className="absolute top-[34px] left-[511px] capitalize inline-block text-left w-16 h-[22px] cursor-pointer"
        onClick={onLogoContainerClick}
      >
        About
      </b>
      <b
        className="absolute top-[34px] left-[614px] capitalize inline-block text-left w-[49px] h-[21px] cursor-pointer"
        onClick={onButtonContainerClick}
      >
        Shop
      </b>
      <b
        className="absolute top-[32px] left-[702px] capitalize inline-block text-left w-[46px] h-5 cursor-pointer"
        onClick={onFrameContainerClick}
      >
        Blog
      </b>
      <b
        className="absolute top-[34px] left-[778px] capitalize inline-block text-left w-[78px] h-[25px] cursor-pointer"
        onClick={onFrameContainerClick1}
      >
        Contact
      </b>
    </div>
  );
};

export default HOME;
