import ImageBanner from '../atoms/ImageBanner';
import TextTitle from '../atoms/TextTitle';

export default function BannerTextImage() {
  return (
    <div
      className="
        flex flex-col
        md:px-20
        lg:flex-row lg:max-w-2xl lg:mx-auto lg:p-0
        "
    >
      <div className="w-20 mx-auto mb-5  lg:w-32 lg:my-auto">
        <ImageBanner src="/static/icons/security.svg" />

      </div>
      <div className="px-5">
        <TextTitle
          text="As principais soluções para a sua segurança estão aqui !!!"
        />
      </div>
    </div>
  );
}
