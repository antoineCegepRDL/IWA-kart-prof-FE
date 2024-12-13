interface PropsInterface {
  title: string;
  value: string | number;
  suffix?: string;
}

const AInfoLine = ({ title, value, suffix = '' }: PropsInterface) => {
  return (
    <p className="flex justify-between">
      <span className="info-title">{title} :</span>{' '}
      <span>
        {value} {suffix}
      </span>
    </p>
  );
};

export default AInfoLine;
