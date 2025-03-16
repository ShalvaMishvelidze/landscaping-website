import FooterArticle from "@/components/FooterArticle";
import FooterContact from "@/components/FooterContact";
import FooterIconContainer from "@/components/FooterIconContainer";
import FooterParagraph from "@/components/FooterParagraph";
import FooterParagraphContainer from "@/components/FooterParagraphContainer";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-yellow-98">
      <div className="max-w-[1200px] max-md:px-[50px] w-full mx-auto py-[120px] px-[15px] flex justify-between items-center gap-[30px] max-xs:flex-col max-xs:px-[20px] max-xs:pb-[80px]">
        <FooterArticle>
          <Image src={"/logo-dark.png"} alt="logo" width={170} height={51.5} />
          <p className="w-[280px] max-xs:w-9/10 text-[15px] text-gray-40 leading-[30px] max-xs:text-justify">
            ჩვენ ან უბედურ არსებას ვქმნით საკუთარი თავისგან, ან უძლიერეს
            არსებას. არჩევანი კი ჩვენზეა.
          </p>
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
        <div className="flex gap-[50px]">
          <FooterArticle className="max-md:hidden">
            <h5 className="footer-heading text-[20px] font-medium text-white relative mb-[20px]">
              გაიგე მეტი
            </h5>
            <FooterParagraphContainer>
              <Image src="/leaf.svg" alt="leaf" width={20} height={17} />
              <FooterParagraph>ჩვენს შესახებ</FooterParagraph>
            </FooterParagraphContainer>
            <FooterParagraphContainer>
              <Image src="/leaf.svg" alt="leaf" width={20} height={17} />
              <FooterParagraph>სერვისები</FooterParagraph>
            </FooterParagraphContainer>
            <FooterParagraphContainer>
              <Image src="/leaf.svg" alt="leaf" width={20} height={17} />
              <FooterParagraph>ჩვენი პროექტები</FooterParagraph>
            </FooterParagraphContainer>
            <FooterParagraphContainer>
              <Image src="/leaf.svg" alt="leaf" width={20} height={17} />
              <FooterParagraph>ჩვენი გუნდი</FooterParagraph>
            </FooterParagraphContainer>
          </FooterArticle>
          <FooterArticle className="max-sm:hidden">
            <h5 className="text-[20px] font-medium text-white relative mb-[20px] footer-heading">
              ახალი ამბები
            </h5>
            <div className="flex flex-col">
              <p className="w-[250px] text-white leading-[26px] font-semibold">
                გთავაზობთ ხეების მოვლას 20% ფასდაკლებით
              </p>
              <p className="text-gold text-[15px] leading-[28.1px] font-light">
                ივნისი 5, 2025 - ივლისი 5, 2025
              </p>
            </div>
            <div className="flex flex-col">
              <p className="w-[250px] text-white leading-[26px] font-semibold">
                გთავაზობთ გაზონის გაკრეჭვას 30% ფასდაკლებით
              </p>
              <p className="text-gold text-[15px] leading-[28.1px] font-light">
                ივნისი 5, 2025 - ივლისი 5, 2025
              </p>
            </div>
          </FooterArticle>
          <FooterArticle>
            <h5 className="text-[20px] font-medium text-white relative mb-[20px] footer-heading">
              კონტაქტი
            </h5>
            <FooterContact
              paragraph="+995 557 65 87 98"
              src="/phone-gold.svg"
            />
            <FooterContact paragraph="ambed@agrios.com" src="/email-gold.svg" />
            <FooterContact paragraph="Vake, Tbilisi" src="/location-gold.svg" />
          </FooterArticle>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
