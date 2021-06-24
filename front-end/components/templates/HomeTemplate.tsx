import ButtonFloatWhatsapp from '../atoms/ButtonFloatWhatsapp';
import BannerTextImage from '../molecules/BannerTextImage';
import CardCategory from '../organisms/CardCategory';
import Carousell from '../organisms/Carousell';
import Drawer from '../organisms/Drawer';
import Footer from '../organisms/Footer';
import NavBar from '../organisms/Navbar';

export default function HomePage() {
  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    + 'Nam vitae tincidunt sem, sed convallis elit. Integer'
    + 'elementum elit lorem, eu ultricies massa bibendum a.';
  return (
    <>
      <div className="h-screen overflow-y-scroll">
        <Drawer />
        <NavBar />
        <ButtonFloatWhatsapp />

        <div className="2xl:h-20" />

        <Carousell />

        <div className="h-auto w-auto my-10">
          <BannerTextImage />
        </div>

        <div className="w-9/12 h-px bg-blue-100 mx-auto mt-10 lg:w-7/12 lg:mb-20" />

        <CardCategory
          imageSide="left"
          src="/static/images/engineGate[temporary].jpg"
          title="Câmeras"
          paragraph={loremIpsum}
          linkPage=""
        />

        <CardCategory
          imageSide="right"
          src="/static/images/engineGate[temporary].jpg"
          title="Motor para Portão"
          paragraph={loremIpsum}
          linkPage=""
        />

        <CardCategory
          imageSide="left"
          src="/static/images/engineGate[temporary].jpg"
          title="Câmeras"
          paragraph={loremIpsum}
          linkPage=""
        />

        <CardCategory
          imageSide="right"
          src="/static/images/engineGate[temporary].jpg"
          title="Motor para Portão"
          paragraph={loremIpsum}
          linkPage=""
        />

        <CardCategory
          imageSide="left"
          src="/static/images/engineGate[temporary].jpg"
          title="Câmeras"
          paragraph={loremIpsum}
          linkPage=""
        />
        <Footer />
      </div>
    </>
  );
}
