import Brand from '#types/Brand';

interface Props {
  brand: Brand;
}

const ABrand = ({ brand }: Props) => {
  return (
    <div className="brand">
      <img
        src={brand.logoUrl}
        width="100"
        height="100"
        alt=""
      />
    </div>
  );
};

export default ABrand;
