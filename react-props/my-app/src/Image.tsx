import './Image.css';

type Props = {
  ImageSrc: string;
};

export function Image({ ImageSrc }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={ImageSrc} alt="space-image" />
      </div>
    </div>
  );
}
