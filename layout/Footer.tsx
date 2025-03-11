import FooterArticle from "@/components/FooterArticle";
import FooterIconContainer from "@/components/FooterIconContainer";
import FooterParagraph from "@/components/FooterParagraph";
import FooterParagraphContainer from "@/components/FooterParagraphContainer";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-yellow-98">
      <div className="w-[1200px] mx-auto py-[120px] px-[15px] flex justify-between items-center gap-[30px]">
        <FooterArticle>
          <Image src={"/logo-dark.png"} alt="logo" width={170} height={51.5} />
          <FooterParagraph>
            There are many variations of passages of lorem ipsum available, but
            the majority suffered.
          </FooterParagraph>
          <div className="flex justify-start items-center gap-[10px]">
            <FooterIconContainer>
              <FaFacebook />
            </FooterIconContainer>
            <FooterIconContainer>
              <FaInstagram />
            </FooterIconContainer>
            <FooterIconContainer>
              <FaTelegram />
            </FooterIconContainer>
          </div>
        </FooterArticle>
        <FooterArticle>
          <h5 className="footer-heading text-[20px] font-medium text-white relative mb-[20px]">
            Explore
          </h5>
          <FooterParagraphContainer>
            <Image src="/leaf.svg" alt="leaf" width={11.25} height={10} />
            <FooterParagraph>About</FooterParagraph>
          </FooterParagraphContainer>
          <FooterParagraphContainer>
            <Image src="/leaf.svg" alt="leaf" width={11.25} height={10} />
            <FooterParagraph>Services</FooterParagraph>
          </FooterParagraphContainer>
          <FooterParagraphContainer>
            <Image src="/leaf.svg" alt="leaf" width={11.25} height={10} />
            <FooterParagraph>Our Projects</FooterParagraph>
          </FooterParagraphContainer>
          <FooterParagraphContainer>
            <Image src="/leaf.svg" alt="leaf" width={11.25} height={10} />
            <FooterParagraph>Meet the Farmers</FooterParagraph>
          </FooterParagraphContainer>
          <FooterParagraphContainer>
            <Image src="/leaf.svg" alt="leaf" width={11.25} height={10} />
            <FooterParagraph>Latest News</FooterParagraph>
          </FooterParagraphContainer>
          <FooterParagraphContainer>
            <Image src="/leaf.svg" alt="leaf" width={11.25} height={10} />
            <FooterParagraph>Contact</FooterParagraph>
          </FooterParagraphContainer>
        </FooterArticle>
        <FooterArticle>
          <h5 className="text-[20px] font-medium text-white relative mb-[20px] footer-heading">
            News
          </h5>
          <div className="flex flex-col">
            <p className="text-white leading-[26px] font-semibold">
              Bringing Food Production Back To Cities
            </p>
            <p className="text-gold text-[15px] leading-[28.1px] font-light">
              July 5, 2022
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-white leading-[26px] font-semibold">
              Bringing Food Production Back To Cities
            </p>
            <p className="text-gold text-[15px] leading-[28.1px] font-light">
              July 5, 2022
            </p>
          </div>
        </FooterArticle>
        <FooterArticle>
          <h5 className="text-[20px] font-medium text-white relative mb-[20px] footer-heading">
            Contact
          </h5>
          <div className="flex justify-start items-center gap-[10px]">
            <Image
              src="/phone-gold.svg"
              alt="phone"
              width={14.15}
              height={14.15}
            />
            <p className="leading-[26px] text-gray-50 text-[15px] cursor-pointer">
              666 888 0000
            </p>
          </div>
          <div className="flex justify-start items-center gap-[10px]">
            <Image src="/email-gold.svg" alt="phone" width={14} height={10.5} />
            <p className="leading-[26px] text-gray-50 text-[15px] cursor-pointer">
              needhelp@company.com
            </p>
          </div>
          <div className="flex justify-start items-center gap-[10px]">
            <Image
              src="/location-gold.svg"
              alt="phone"
              width={12}
              height={16}
            />
            <p className="leading-[26px] text-gray-50 text-[15px] cursor-pointer">
              80 broklyn golden street line New York, USA
            </p>
          </div>
        </FooterArticle>
      </div>
    </footer>
  );
};
export default Footer;
